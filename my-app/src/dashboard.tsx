import { useState } from "react"

function Dashboard() {
    const [activeTab, setActiveTab] = useState('marks')
    const marksData = [
                {subject: 'Math', test: 'Test 1', mark: 87, date: '2026-08-09'},
                {subject: 'Business Studies', test: 'Test 1', mark: 87, date: '2026-08-09'},
            ]
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
            {activeTab === 'behaviour' && <p>Behaviour section</p>}
        </div>
    )
}

export default Dashboard