import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../Css/styles.css'


const Dashboard = (props) => {

    const [APIFoodS, setAPIFoodS] = React.useState(25555)
    const [APIFoodG, setAPIFoodG] = React.useState(5000);
    const [TUsers, setTUsers] = React.useState(1222);
    const [MaleUsers, setMaleUsers] = React.useState(1333);
    const [FemaleUsers, setFemaleUsers] = React.useState(15432);
    const [APIFoodL, setAPIFoodL] = React.useState(1113);
    const [Adate, setAdate] = React.useState(moment().format('L'))
    
  

    return(
        <div id={"dashboardContainer"}>
            <div id={"dashboardView"}>
            <div id={"dashboardHeader"}>
            <p style={{fontWeight: "bold", fontSize: 35, marginLeft: 20, color: "white"}}>
                Nutrigoals Dashboard
            </p>
            <Link to="/login"><button onClick={()=>props.setValidation(false)} style={{fontSize: 15, width: 100, height: 40, borderRadius: 20, marginRight: 20
            , fontWeight: "bold"}}> Log Out</button></Link>
            </div>
                <div id={"dashboardBody"}>
            {/* body row 1 */}
            <div id={"bodyRow1"}>
            <div id={"dbMacroView"}> 
                <p id={"bodyMacroHeaders"}>API Calls: food search</p>
                <div style={{height: 1, width: "100%", backgroundColor: 'rgba(100,100,100,0.4)'}}/>
                <div style={{height: "20", backgroundColor: "rgba(20,20,20,0.8)",alignItems: "center", borderRadius: 10,marginTop: 30,paddingLeft: 7, paddingRight: 7 }}>
                <p style={{fontSize: 50, color: "white"}}>{APIFoodS}</p>
                </div>
            </div>
            <div id={"dbMacroView"}> 
            <p id={"bodyMacroHeaders"}>API Calls: food get</p>
            <div style={{height: 1, width: "100%", backgroundColor: 'rgba(100,100,100,0.4)',}}/>
            <div style={{height: "20", backgroundColor: "rgba(20,20,20,0.8)",alignItems: "center", borderRadius: 10,marginTop: 30,paddingLeft: 7, paddingRight: 7 }}>
                <p style={{fontSize: 50, color: "white"}}>{APIFoodG}</p>
                </div>
            </div>
            <div id={"dbMacroView"}> 
            <p id={"bodyMacroHeaders"}>Total Users</p>
            <div style={{height: 1, width: "100%", backgroundColor: 'rgba(100,100,100,0.4)',}}/>
            <div style={{height: "20", backgroundColor: "rgba(20,20,20,0.8)",alignItems: "center", borderRadius: 10,marginTop: 30,paddingLeft: 7, paddingRight: 7 }}>
                <p style={{fontSize: 50, color: "white"}}>{TUsers}</p>
                </div>
            </div>
            <div id={"dbMacroView"}> 
            <p id={"bodyMacroHeaders"}>Male Users</p>
            
            <div style={{height: 1, width: "100%", backgroundColor: 'rgba(100,100,100,0.4)',}}/>
            <div style={{height: "20", backgroundColor: "rgba(20,20,20,0.8)",alignItems: "center", borderRadius: 10,marginTop: 30,paddingLeft: 7, paddingRight: 7 }}>
                <p style={{fontSize: 50, color: "white"}}>{MaleUsers}</p>
                </div>
            </div>
            </div>

            <div style={{height: 1, width: "100%", backgroundColor: 'rgba(100,100,100,0.4)',}}/>    
            {/* body row 2 */}
            <div id={"bodyRow2"}>
            <div id={"dbMacroView"}> 
            <p id={"bodyMacroHeaders"}>API Calls: food logs</p>
            <div style={{height: 1, width: "100%", backgroundColor: 'rgba(100,100,100,0.4)',}}/>
            <div style={{height: "20", backgroundColor: "rgba(20,20,20,0.8)",alignItems: "center", borderRadius: 10,marginTop: 30,paddingLeft: 7, paddingRight: 7 }}>
                <p style={{fontSize: 50, color: "white"}}>{FemaleUsers}</p>
                </div>
            </div>
            <div id={"dbMacroView"}> 
            <p id={"bodyMacroHeaders"}>Dashboard Last Access date</p>
            <div style={{height: 1, width: "100%", backgroundColor: 'rgba(100,100,100,0.4)',}}/>
            <div style={{height: "20", backgroundColor: "rgba(20,20,20,0.8)",alignItems: "center", borderRadius: 10,marginTop: 30,paddingLeft: 7, paddingRight: 7 }}>
                <p style={{fontSize: 35, color: "white"}}>{Adate}</p>
                </div>
            </div>
            <div id={"dbMacroView"}> 
            <p style={{marginTop: "45%", fontSize: 35}}>+</p>
            </div>
            <div id={"dbMacroView"}> 
                <p style={{marginTop: "45%", fontSize: 35}}>+</p>
            </div>
            </div>
            
                </div>
            </div>
        </div>
    )

}

export default Dashboard;