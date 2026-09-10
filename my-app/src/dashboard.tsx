import { useState } from "react"

function Dashboard() {
    const [activeTab, setActiveTab] = useState('marks')
    const marksData = [
                {subject: 'Math', test: 'Test 1', mark: 87, date: '2026-08-09'},
                {subject: 'Business Studies', test: 'Test 1', mark: 87, date: '2026-08-09'},
            ]
    const BehaviourData = [
        {date: '2026-09-09', description: "Late to class", demerits: 20},
        {date: '2026-09-10', description: "Talking non-stop", demerits: 60},

    ]
    const totalDemerits = BehaviourData.reduce((sum, entry) => sum + entry.demerits, 0)
    return (
        <div>
            <button onClick={() => setActiveTab('marks')}>Marks</button>
            <button onClick={() => setActiveTab('behaviour')}>Behaviour</button>
            
            {activeTab === 'marks' &&  (
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Test</th>
                            <th>Mark</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marksData.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.subject}</td>
                                <td>{entry.test}</td>
                                <td>{entry.mark}</td>
                                <td>{entry.date}</td>
                            </tr>
                        )
                        )
                        }
                    </tbody>
                </table>
            )}
            {activeTab === 'behaviour' &&  (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Demerits</th>
                            </tr>
                        </thead>
                        <tbody>
                            {BehaviourData.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.date}</td>
                                    <td>{entry.description}</td>
                                    <td>{entry.demerits}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                    <p>Total demerits this week: {totalDemerits}</p>

                    {totalDemerits >= 40 && (
                        <button onClick={() => alert('Meeting request has been logged!')}>Request Meeting with Teacher</button>
                    )}
                </div>
            )}
        </div>
    )
}

export default Dashboard