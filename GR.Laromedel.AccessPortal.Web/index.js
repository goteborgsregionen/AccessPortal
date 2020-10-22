import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
    getUser,
    logout,
    login,
    renewToken
} from './services/auth-service'

const apiUrl = process.env.API_URL

const License = function ({ title, description }) {
    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
        </>
    )
}

const Licenses = function () {
    const [licenses, setLicenses] = useState([])

    useEffect(() => {
        const fetchLicenses = async () => {
            const response = await fetch(`${apiUrl}/license`)
            const json = await response.json()

            setLicenses(json)
        }

        fetchLicenses()
    }, [])

    return (
        <div>
            <h1>Licenses!!</h1>
            {licenses.map(license =>
                <License
                    key={license.title}
                    title={license.title}
                    description={license.description}
                />)}
        </div>
    )
}

const App = function () {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser().then(user => {
            setUser(user);
        })
    })

    return (<div>
        {user == null && <div>
            <button value="Logga in" onClick={() => login()}>
                Logga in
            </button>
        </div>}
        {user != null && <div>
                <button value="Logga ut" onClick={() => logout()}>
                    Logga ut
                </button>
                <Licenses />
            </div>}
    </div>)
}

ReactDOM.render(<App />, document.getElementById('app'))