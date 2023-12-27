import { useState } from 'react'
import Forms from './components/Forms'
import Table from './components/Table';

function App() {
  const [winner, setwinner] = useState("")
  const [loser, setloser] = useState("")
  const [rOrW, setrOrW] = useState(0);
  const [winType, setWinType] = useState("Runs")
  const [logs, setLogs] = useState([
  { id: 1, name: 'India', log: [] },{ id: 2, name: 'Pakistan', log: [] }, { id: 3, name: 'England', log: [] },
  { id: 4, name: 'Australia', log: [] }, { id: 5, name: 'Afghanistan', log: [] }, { id: 6, name: 'Sri Lanka', log: [] }])

  const [TeamsData, setData] = useState([{
    id: 1,
    name: 'India',
    PWLT: [0, 0, 0, 0],
    log:[]
  }, {
    id: 2,
    name: 'Pakistan',
    PWLT: [0, 0, 0, 0],
    log:[]
  }, {
    id: 3,
    name: 'England',
    PWLT: [0, 0, 0, 0],
    log:[]
  }, {
    id: 4,
    name: 'Australia',
    PWLT: [0, 0, 0, 0],
    log:[]
  }, {
    id: 5,
    name: 'Afghanistan',
    PWLT: [0, 0, 0, 0],
    log:[]
  }, {
    id: 6,
    name: 'Sri Lanka',
    PWLT: [0, 0, 0, 0],
    log:[]
  }
  ])

  const handleWinner = (e) => {
    setwinner(e.target.value);
    // console.log("winner is:" +winner)
  }

  const handleLoser = (e) => {
    setloser(e.target.value);
    //console.log("loser is: "+loser)
  }
  const handletype = (e) => {
    setWinType(e.target.value);
  }

  const handleRuns = (e) => {
    setrOrW(e.target.value);
  }
  const fnPntsWinner = (obj) => {
    obj[0] += 1;
    obj[1] += 1;
    obj[3] += 2;
    // console.log("winners pwlt" + obj);
    return obj;
  }

  const fnPntsLoser = (obj) => {
    obj[0] += 1;
    obj[2] += 1;
    // console.log("losers pwlt" + obj);
    return obj;
  }

  const fnPushLog = (log, newLog, rang) => {
    log.push({color:rang , logData:newLog});
    return log;
  }

  const updateLoserItem = (id, pwlt) => {
    const updatedItems = TeamsData.map(item => {
      if (item.id === id) {
        return { ...item, PWLT: fnPntsLoser(pwlt) };
      }
      return item;
    });
    // console.log("updated" + updatedItems);
    setData(updatedItems);
  };

  const updateWinnerItem = (id, pwlt) => {
    const updatedItems = TeamsData.map(item => {
      if (item.id === id) {
        return { ...item, PWLT: fnPntsWinner(pwlt) };
      }
      return item;
    });
    setData(updatedItems);
  };

  const fnUpdateWLogs = (wTeamId, teamLog, newLog) => {
    var color = true;
    const updatedLogs = TeamsData.map(item => {
      if (item.id === wTeamId) {
        return { ...item, log: fnPushLog(teamLog, newLog, color) }
      }
      return item;
    });
    setData(updatedLogs)
    //console.log(logs);
  }

  const fnUpdateLLogs = (lTeamId, teamLog, newLog) => {
    var color = false
    const updatedLogs = TeamsData.map(item => {
      if (item.id === lTeamId) {
        return { ...item, log: fnPushLog(teamLog, newLog, color) }
      }
      return item;
    });
    setData(updatedLogs)
    // console.log(logs);
  }



  const handleSubmit = () => {
    if (winner == loser) {
      alert("Winner and loser cannot be same!");
    }
    else {
      var winnerTeamData = TeamsData.find(t => t.name == winner)
      var loserTeamData = TeamsData.find(t => t.name == loser)
      var winnerPnts = updateWinnerItem(winnerTeamData.id, winnerTeamData.PWLT)
      var loserPnts = updateLoserItem(loserTeamData.id, loserTeamData.PWLT)

      // console.log(winnerTeamData);
      var winnerlogs = winner + " won against " + loser + " by " + rOrW + " " + winType;
      // console.log(winnerlogs);
      var dummy1 = fnUpdateWLogs(winnerTeamData.id, winnerTeamData.log, winnerlogs)
      var loserLogs = loser + " lost against " + winner + " by " + rOrW + " " + winType;
      var dummy2 = fnUpdateLLogs(loserTeamData.id, loserTeamData.log, loserLogs)
    }
  }

  // need to make wLogs as array of object of each team with props  id, team and log[] array
  // need to make only one log state just add to loserlog to loser team and winnerlog to winner team and show the
  //log below that team row
  // for line 121 find item of winner in wLogs and send it to a function where it will edit log array and keep logs
  // after this need to send whole log array data to table and teamrow then there we can condition and only show data
  // of that team row.


  return (
    <div >
      <div className=' text-white text-center py-3 m-2 bg-red-500'>Match Points Table</div>
      <div className='flex justify-center mb-5'><Forms winner={winner} loser={loser} handleWinner={handleWinner} handleLoser={handleLoser} handleSubmit={handleSubmit} handletype={handletype} handleRuns={handleRuns} /></div>
      <hr />
      <Table log={logs} teams={TeamsData} winner={winner} loser={loser} />
      {/* winnerlog={winnerLog} loserlog={loserLog} */}
    </div>
  )
}

export default App
