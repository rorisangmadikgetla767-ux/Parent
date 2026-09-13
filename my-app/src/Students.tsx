import { useState } from "react"

function StudentDashboard() {
    const [activeTab, setActiveTab] = useState('marks')
    const marksData = [
                {subject: 'Math', test: 'Test 1', mark: 38, date: '2026-08-09'},
                {subject: 'Business Studies', test: 'Test 1', mark: 27, date: '2026-08-09'},
            ]
    const BehaviourData = [
        {date: '2026-09-09', description: "Late to class", demerits: 20},
        {date: '2026-09-10', description: "Talking non-stop", demerits: 60},

    ]
    const totalDemerits = BehaviourData.reduce((sum, entry) => sum + entry.demerits, 0)

    const studentName = 'Rorisang Katleho Madikgetla'

    const averageMark = marksData.reduce((sum, entry) => sum + entry.mark, 0) / marksData.length
    return (
        <div className="dashboard-container">
            <h1>Welcome {studentName
                
                }, to your very own Dashboard!</h1>
            <button 
            className={activeTab === 'marks' ? 'active-tab' : ''} 
            onClick={() => setActiveTab('marks')}
            >
                Marks
            </button>

            <button 
            className= {activeTab === 'behaviour' ? 'active-tab' : ''}
            onClick={() => setActiveTab('behaviour')}>Behaviour</button>
            
            {activeTab == 'marks' && (
                <>
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
                    )}
                      </tbody>
                   </table>
                   {averageMark <50 && (
                    <button onClick={() => alert("Intervention has been logged, goodluck!")}>
                        Request Intervention
                    </button>
                   )}
                </>
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

                    
                </div>
            )}
        </div>
    )
}

export default StudentDashboard