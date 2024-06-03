import { useState, useEffect } from 'react';
import { SET_STATS } from '../../utils/mutations';
import { QUERY_ADMIN } from '../../utils/queries';

import { useMutation, useQuery } from '@apollo/client';

export default function changeStatsForm() {
    const {loading, data} = useQuery(QUERY_ADMIN);


    const [setStats, {error, data:setStatsData}] = useMutation(SET_STATS);

    const [formState, setFormState] = useState({
        callsRecieved: '',
        peopleServed: '',
        reversals: '',

    })

    useEffect(() => {
        if(data) {
            setFormState({
                callsRecieved: data.admin.callsRecieved,
                peopleServed: data.admin.peopleServed,
                reversals: data.admin.reversals,
            });
        }
    }, [data]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const statsSubmit = async (event) => {
        event.preventDefault();
        try {
            // This is here to check if something is put in the stat input and if there isn't anything, it won't update that stat as null
            const variables = Object.fromEntries(
                Object.entries(formState).filter(([key, value]) => value ).map(([key, value]) => [key, parseInt(value)])
            );
            await setStats({variables});
            setFormState({
                callsRecieved: formState.callsRecieved,
                peopleServed: formState.peopleServed,
                reversals: formState.reversals,
            })
        } catch (error) {
            console.error(error);
        }
    }
    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <form 
                className='col-3 p-3'
                onChange={handleChange}>
                <h1> Change Stats </h1>
                <div className="input-group mb-3">
                    <span 
                        className="input-group-text" 
                        id="inputGroup-sizing-callsRecieved">
                            Calls Recieved
                    </span>
                    <input 
                        name='callsRecieved' 
                        type="number" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                        value={formState.callsRecieved}
                        onChange={handleChange} 
                    />
                </div>
                <div className="input-group mb-3">
                    <span 
                        className="input-group-text" 
                        id="inputGroup-sizing-peopleServed">
                            People Served
                    </span>
                    <input 
                        name='peopleServed' 
                        type="number" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default" 
                        value={formState.peopleServed}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <span 
                        className="input-group-text" 
                        id="inputGroup-sizing-reversals">
                            Reversals
                    </span>
                    <input 
                        name='reversals' 
                        type="number" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default" 
                        value={formState.reversals}
                        onChange={handleChange}
                    />
                </div> 
                <button 
                    type='submit' 
                    className='btn btn-primary' 
                    onClick={statsSubmit}>
                        Update Stats
                </button>
            </form>
        </>
    )

}