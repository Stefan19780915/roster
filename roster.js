 ///////////////////// STORE CLASS //////////////////////////

class Store {
	static trs = [{Date: 'Select Day'}];
	static roster = {};
    static rosters = [];
	
	static getRosters() {
    
      if (localStorage.getItem("rosters") == null) {
		  
         Store.roster = new Roster(
          "Empty",
          "00:00",
          "00:00",
          "00:00",
          0,
          0,
          0,
          [],
          [],
          [],
          [],
		  [],
		  []
        );
        Store.rosters = [Store.roster];
      } else {
        Store.rosters = JSON.parse(localStorage.getItem("rosters"));
      }
      return Store.rosters;
    }
  
    static addRoster(newRoster) {
      const rosters = Store.getRosters();
      rosters.push(newRoster);
      localStorage.setItem("rosters", JSON.stringify(rosters));
    }
  
    static removeRoster(name) {
      const rosters = Store.getRosters();
      rosters.forEach((roster, index) => {
        if (roster.name == name) {
          rosters.splice(index, 1);
        }
      });
      localStorage.setItem("rosters", JSON.stringify(rosters));
	  window.confirm(`Roster ${name} was deleted`);
    }
	
	static updateRoster(name, newRoster){
		Store.removeRoster(name);
		Store.addRoster(newRoster);
		window.confirm(`Roster ${name} was updated`);
	}
	
	static getTrs(arr){
		if(localStorage.getItem('trs') == null){
			localStorage.setItem('trs', JSON.stringify(arr));
		} else {
			Store.trs = JSON.parse(localStorage.getItem('trs'));
		}
		return Store.trs;
	}
	
	static addTrs(arr){
		let trs = Store.getTrs(arr);
		trs = [...trs, ...arr];
		localStorage.setItem("trs", JSON.stringify(trs));
		window.confirm(`Transactions were added`);
	}
	
  }

  //////////////////END OF CLASS STORE //////////////////////


  ////////////// CLASS ROSTER //////////////////////////////
  
  class Roster {
    constructor(
      name,
      timePreSelect,
      timeOpenSelect,
      timeCloseSelect,
      countHeadPre,
      countHeadOpen,
      countHeadClose,
      shiftsPre,
      shiftsOpen,
      shiftsClose,
      labourPerHour,
	  transactionsPerHour,
	  deploymentCard
    ) {
      (this.name = name),
        (this.timePreSelect = timePreSelect),
        (this.timeOpenSelect = timeOpenSelect),
        (this.timeCloseSelect = timeCloseSelect),
        (this.countHeadPre = countHeadPre),
        (this.countHeadOpen = countHeadOpen),
        (this.countHeadClose = countHeadClose),
        (this.shiftsPre = shiftsPre),
        (this.shiftsOpen = shiftsOpen),
        (this.shiftsClose = shiftsClose),
		(this.transactionsPerHour = transactionsPerHour),
        (this.labourPerHour = labourPerHour),
		(this.deploymentCard = deploymentCard);
    }
	
	static preShiftsIds = [];
	static openShiftsIds = [];
	static closeShiftsIds = [];
	static deploymentIds = [];
	static idealHours = [];
	

	setPreShiftId(){
	this.shiftsPre.length > 0 ? (
	  		Roster.preShiftsIds = this.shiftsPre.map((shift)=>{
				return shift.id+1;
			})
	  ) : (Roster.preShiftsIds.push(1));
	}
	
	setOpenShiftId(){
	this.shiftsOpen.length > 0 ? (
	  		Roster.openShiftsIds = this.shiftsOpen.map((shift)=>{
				return shift.id+1;
			})
	  ) : (Roster.openShiftsIds.push(1));
	}
	
	setCloseShiftId(){
	this.shiftsClose.length > 0 ? (
	  		Roster.closeShiftsIds = this.shiftsClose.map((shift)=>{
				return shift.id+1;
			})
	  ) : (Roster.closeShiftsIds.push(1));
	}
	
	setRosterName(name){
		this.name = name;
	}
    setTimePreSelect(time) {
      this.timePreSelect = time;
    }
    setTimeOpenSelect(time) {
      this.timeOpenSelect = time;
    }
    setTimeCloseSelect(time) {
      this.timeCloseSelect = time;
    }
    setCountHeadPre(time) {
      this.countHeadPre = time;
    }
    setCountHeadOpen(time) {
      this.countHeadOpen = time;
    }
    setCountHeadClose(time) {
      this.countHeadClose = time;
    }
    setShiftsPre(shift) {
      this.shiftsPre.push(shift);
    }
    setShiftsOpen(shift) {
      this.shiftsOpen.push(shift);
    }
    setShiftsClose(shift) {
      this.shiftsClose.push(shift);
    }
    setShiftsPreFrom(id, time) {
      this.shiftsPre.forEach((shift) => {
        shift.id == id ? (shift.from = time) : shift.from;
      });
    }
    setShiftsOpenFrom(id, time) {
      this.shiftsOpen.forEach((shift) => {
        shift.id == id ? (shift.from = time) : shift.from;
      });
    }
    setShiftsCloseFrom(id, time) {
      this.shiftsClose.forEach((shift) => {
        shift.id == id ? (shift.from = time) : shift.from;
      });
    }
    setShiftsPreTo(id, time) {
      this.shiftsPre.forEach((shift) => {
        shift.id == id ? (shift.to = time) : shift.to;
      });
    }
    setShiftsOpenTo(id, time) {
      this.shiftsOpen.forEach((shift) => {
        shift.id == id ? (shift.to = time) : shift.to;
      });
    }
    setShiftsCloseTo(id, time) {
      this.shiftsClose.forEach((shift) => {
        shift.id == id ? (shift.to = time) : shift.to;
      });
    }
    removeShiftsPre(id) {
      this.shiftsPre.forEach((shift, index) => {
        id == shift.id ? this.shiftsPre.splice(index, 1) : shift;
      });
    }
    removeShiftsOpen(id) {
      this.shiftsOpen.forEach((shift, index) => {
        id == shift.id ? this.shiftsOpen.splice(index, 1) : shift;
      });
    }
    removeShiftsClose(id) {
      this.shiftsClose.forEach((shift, index) => {
        id == shift.id ? this.shiftsClose.splice(index, 1) : shift;
      });
    }
    setPositionShiftsPre(id, position) {
      this.shiftsPre.forEach((shift, index) => {
        id == shift.id ? (shift.position = position) : shift.position;
      });
    }
    setPositionShiftsOpen(id, position) {
      this.shiftsOpen.forEach((shift, index) => {
        id == shift.id ? (shift.position = position) : shift.position;
      });
    }
    setPositionShiftsClose(id, position) {
      this.shiftsClose.forEach((shift, index) => {
        id == shift.id ? (shift.position = position) : shift.position;
      });
    }
    setHoursShiftsPre(id, hours) {
      this.shiftsPre.forEach((shift, index) => {
        id == shift.id ? (shift.hours = hours) : shift.hours;
      });
    }
    setHoursShiftsOpen(id, hours) {
      this.shiftsOpen.forEach((shift, index) => {
        id == shift.id ? (shift.hours = hours) : shift.hours;
      });
    }
    setHoursShiftsClose(id, hours) {
      this.shiftsClose.forEach((shift, index) => {
        id == shift.id ? (shift.hours = hours) : shift.hours;
      });
    }
    setLabourPerHour(num){
      this.labourPerHour = Array(num).fill(0);
    }
	setTransactionsPerHour(arr){
		let reducedArr = [];
      		for (let i = 0; i < arr.length; i = i + 2){
        	arr[i] + arr[i+1] ? reducedArr.push(arr[i]) : reducedArr.push(0);
      		}
			reducedArr.pop();
		let obj = reducedArr.map((item)=>{
			return { [item]: 0 };
		});
		this.transactionsPerHour = obj;
	}
	
	updateTransactionsPerHour(trsArr){
		this.transactionsPerHour = trsArr;
	}
	
    updateLabourPerHour(arr){
      this.setLabourPerHour(this.countHeadOpen);
      //console.log(arr);
      this.shiftsOpen.forEach((shift)=>{
        //console.log(shift.from, shift.to);
        let start = arr.indexOf(shift.from);
        let end = arr.indexOf(shift.to);
        //console.log(start, end);
        this.labourPerHour.forEach((hour, i)=>{
            i >= start && i < end ? this.labourPerHour[i] = hour += 0.5 : 0;
        });
      });
      //console.log(this.labourPerHour);
    }
	
    getLabourPerHour(){
      return this.labourPerHour;
    }
	
	setDeploymentRow(obj) {
      this.deploymentCard.push(obj);
    }
	
	setDeploymentId(){
	this.deploymentCard.length > 0 ? (
	  		Roster.deploymentIds = this.deploymentCard.map((card)=>{
				return card.id+1;
			})
	  ) : (Roster.deploymentIds.push(1));
	}
	
	setDeploymentPosition(id, position){
		//console.log(id, position);
		this.deploymentCard.forEach((row) => {
        row.id == id ? (row.positions = position) : row.positions;
      });
		
	}
	
	deleteDeploymentRow(id){
		this.deploymentCard.forEach((row, index) => {
        id == row.id ? this.deploymentCard.splice(index, 1) : row;
      });
	}
	
	setCheckBox(id, label){
		this.deploymentCard.forEach((row, index) => {
		id != row.id ? row : id == row.id && row[label] == 1 ? row[label] = 0 : row[label] = 1;
      });
	}
	
	convertTime(arrOfTimes){
		const result = arrOfTimes.map((timeString)=>{
			let regExTime = /([0-9]?[0-9]):([0-9][0-9])/;
			let regExTimeArr = regExTime.exec(timeString);
			let timeHr = regExTimeArr[1] * 3600 * 1000;
			let timeMin = regExTimeArr[2] * 60 * 1000;
			let timeMs = timeHr + timeMin;
			let refTimeMs = 1577833200000;
			let time = new Date (refTimeMs + timeMs);
			return time.getHours();
		});
		return result;
	}
	
	sumIdealHours(){
		//CLEARING TJE UI
		const table = document.getElementById('open-row');
		table.querySelectorAll('tr').forEach((el)=>{
			el.remove();
		});
		//END OF CLEARINTHE UI
		
		//CLEARING THE OBJECT
		this.shiftsOpen = [];
		
		//console.log(this.transactionsPerHour);
		//console.log(this.deploymentCard);
		const result = {
					t0: [],
					t35: [],
					t45: [],
					t55: [],
					t65: [],
					t75: [],
					t85: [],
					t95: [],
					t105: []
				};
		
		this.deploymentCard.forEach((row)=>{
			Object.keys(row).forEach((key)=>{	
				key == 't0' && row[key] > 0 ? result.t0.push(row.positions) :
				key == 't35' && row[key] > 0 ? result.t35.push(row.positions) :
				key == 't45' && row[key] > 0 ? result.t45.push(row.positions) :
				key == 't55' && row[key] > 0 ? result.t55.push(row.positions) :
				key == 't65' && row[key] > 0 ? result.t65.push(row.positions) :
				key == 't75' && row[key] > 0 ? result.t75.push(row.positions) :
				key == 't85' && row[key] > 0 ? result.t85.push(row.positions) :
				key == 't95' && row[key] > 0 ? result.t95.push(row.positions) :
			    key == 't105' && row[key] > 0 ? result.t105.push(row.positions) : ''
				
			});
		});
		
		const sum = this.deploymentCard.reduce((acc, row)=>{
			return {
				t0: acc.t0 + row.t0,
				t35: acc.t35 + row.t35,
				t45: acc.t45 + row.t45, 
				t55: acc.t55 + row.t55, 
				t65: acc.t65 + row.t65, 
				t75: acc.t75 + row.t75, 
				t85: acc.t85 + row.t85, 
				t95: acc.t95 + row.t95,
				t105: acc.t105 + row.t105
			}
		},{
			t0: 0,
			t35: 0,
			t45: 0,
			t55: 0,
			t65: 0,
			t75: 0,
			t85: 0,
			t95: 0,
			t105: 0
		});
		
		//console.log(sum);
		//console.log(result);
		
		const sumAndResult = {
			t0: [sum.t0,...result.t0],
			t35: [sum.t35,...result.t35],
			t45: [sum.t45,...result.t45],
			t55: [sum.t55,...result.t55],
			t65: [sum.t65,...result.t65],
			t75: [sum.t75,...result.t75],
			t85: [sum.t85,...result.t85],
			t95: [sum.t95,...result.t95],
			t105: [sum.t105,...result.t105],
		}
		
		//console.log(sumAndResult);
		
		const ideal = this.transactionsPerHour.map((row, index)=>{
			return {
				[Object.keys(row)]: 
				row[Object.keys(row)] < 35 ? sumAndResult.t0 :
				row[Object.keys(row)] >= 35 && row[Object.keys(row)] < 45 ? sumAndResult.t35 :
				row[Object.keys(row)] >= 45 && row[Object.keys(row)] < 55 ? sumAndResult.t45 :
				row[Object.keys(row)] >= 55 && row[Object.keys(row)] < 65 ? sumAndResult.t55 :
				row[Object.keys(row)] >= 65 && row[Object.keys(row)] < 75 ? sumAndResult.t65 :
				row[Object.keys(row)] >= 75 && row[Object.keys(row)] < 85 ? sumAndResult.t75 :
				row[Object.keys(row)] >= 85 && row[Object.keys(row)] < 95 ? sumAndResult.t85 :
				row[Object.keys(row)] >= 95 && row[Object.keys(row)] < 105 ? sumAndResult.t95 :
				row[Object.keys(row)] >= 105 ? sumAndResult.t105 : 0
			}
		});
		console.log(ideal);
		//console.log(this.transactionsPerHour);
		//console.log(UI.StoredPositions);
		let times = [];
		let resReducedTimes = [];
		
		//EACH POSITION IS GETTING THE TIMES
		UI.StoredPositions.forEach((position)=>{
			ideal.forEach((time)=>{
				//console.log(time[Object.keys(time)], Object.keys(time)[0]);
				time[Object.keys(time)].forEach((item)=>{
					//console.log(item);
					item == position ?
					times.push({
						[position]: Object.keys(time)[0]	
					})
					/*console.log(`Time at ${position} is ${Object.keys(time)[0]}`)*/ : 'not';
				});			
			});
			
		});
		//console.log(times);
		
		UI.StoredPositions.forEach((pos)=>{
			let arr = [];
			const reduced = times.reduce((acc, crr)=>{
				//console.log(Object.keys(acc)[0]);
			pos == Object.keys(crr)[0] ? 
			arr.push(Object.values(crr)[0])
			: '';
			return {
				[pos]: arr
			}
		}, [{[pos]: arr}]);	
			resReducedTimes.push(reduced);
			//console.log(reduced);
			
		});
		
		console.log(resReducedTimes);
		
		//SCHEDULING LOGIC - OF REDUCED TIMES BY POSITON
		resReducedTimes.forEach((person)=>{
			//console.log(Object.values(person)[0].length);
			let shift = '';
			const timeOpenSelect = document.getElementById("time-open-select");
			
			//GETTING THE START AND END TIMES OF THE PERSON - AND ODD START TIMES
			//console.log(this.convertTime(Object.values(person)[0]));
			const personTimes = [];
			const oddStartTimes = [];
			for (let x = 0; x < Object.values(person)[0].length; ++x){
				
				if(this.convertTime(Object.values(person)[0])[x-1]){
					this.convertTime(Object.values(person)[0])[x] == this.convertTime(Object.values(person)[0])[x-1]+1 ? 
					personTimes.push(Object.values(person)[0][x]) : oddStartTimes.push(Object.values(person)[0][x]);
					
				} else {
					this.convertTime(Object.values(person)[0])[x] == this.convertTime(Object.values(person)[0])[x+1]-1 ? 
					personTimes.push(Object.values(person)[0][x]) : oddStartTimes.push(Object.values(person)[0][x]);
					
				}
				
			}
			
			//console.log(personTimes);
			//console.log(oddStartTimes);
			///// END OF LOGIC START AND END TIMES + ODD TIMES
 			
			//FIRST CONDITION
			personTimes.length < 9 && personTimes.length ?
				//console.log(` ${Object.keys(person)[0]} From: ${Object.values(person)[0][0]} -- To ${Object.values(person)[0][Object.values(person)[0].length-1]}`)
				//RUN THE FUNNCTION OF ADDING A SHIFT TO ROSTER
						(
						UI.newRoster.setOpenShiftId(),
						//console.log(Roster.openShiftsIds);  
					      shift = new Shift(
					      Math.max(...Roster.openShiftsIds),
					      "",
					      Object.keys(person)[0],
					      personTimes[0],
					      personTimes[personTimes.length-1],
					      ""
					    ),
					    UI.addShiftToRoster(
					      [shift],
					      "open-row",
					      timeOpenSelect.value,
					      UI.countHeadOpen,
					      UI.StoredPositions
					    ),UI.newRoster.setShiftsOpen(shift),
						UI.newRoster.updateLabourPerHour(UI.timeSlotsRowSelector(timeOpenSelect.value, UI.countHeadOpen)),
						UI.displayLabourHours(
                			UI.newRoster.getLabourPerHour(),
                			'orange',
                			'labour-hours-open-head'),
				
				///FOR THE ODD START TIMES TIMES
				oddStartTimes.forEach((startTime, index)=>{
					//ODD START TIME
					//console.log(startTime);
					//END TIME MAX + 4 HOURS
					//console.log(this.convertTime(oddStartTimes)[index] + 1 + ':00');
					
					UI.newRoster.setOpenShiftId(),
						//console.log(Roster.openShiftsIds);  
					      shift = new Shift(
					      Math.max(...Roster.openShiftsIds),
					      "",
					      Object.keys(person)[0],
					      startTime,
					      this.convertTime(oddStartTimes)[index] + 4 + ':00',
					      ""
					    ),
					    UI.addShiftToRoster(
					      [shift],
					      "open-row",
					      timeOpenSelect.value,
					      UI.countHeadOpen,
					      UI.StoredPositions
					    ),UI.newRoster.setShiftsOpen(shift),
						UI.newRoster.updateLabourPerHour(UI.timeSlotsRowSelector(timeOpenSelect.value, UI.countHeadOpen)),
						UI.displayLabourHours(
                			UI.newRoster.getLabourPerHour(),
                			'orange',
                			'labour-hours-open-head')
					
				})		
				
			)
			
			//SECOND CONDITION
			: personTimes.length > 9 && personTimes.length ? 
				//RUN THE FUNCTION 2X
			    //console.log(` ${Object.keys(person)[0]} From: ${Object.values(person)[0][0]} -- To ${Object.values(person)[0][Object.values(person)[0].length-5]}`,` ${Object.keys(person)[0]} From: ${Object.values(person)[0][5]} -- To ${Object.values(person)[0][Object.values(person)[0].length-1]}`)
			(
			
			////First
					UI.newRoster.setOpenShiftId(),
						//console.log(Roster.openShiftsIds);  
					      shift = new Shift(
					      Math.max(...Roster.openShiftsIds),
					      "",
					      Object.keys(person)[0],
					      personTimes[0],
					      personTimes[personTimes.length-8],
					      ""
					    ),
					    UI.addShiftToRoster(
					      [shift],
					      "open-row",
					      timeOpenSelect.value,
					      UI.countHeadOpen,
					      UI.StoredPositions
					    ),UI.newRoster.setShiftsOpen(shift),
						UI.newRoster.updateLabourPerHour(UI.timeSlotsRowSelector(timeOpenSelect.value, UI.countHeadOpen)),
						UI.displayLabourHours(
                			UI.newRoster.getLabourPerHour(),
                			'orange',
                			'labour-hours-open-head'),
				
			///Second
					UI.newRoster.setOpenShiftId(),
						//console.log(Roster.openShiftsIds);  
					      shift = new Shift(
					      Math.max(...Roster.openShiftsIds),
					      "",
					      Object.keys(person)[0],
					      personTimes[6],
					      personTimes[personTimes.length-1],
					      ""
					    ),
					    UI.addShiftToRoster(
					      [shift],
					      "open-row",
					      timeOpenSelect.value,
					      UI.countHeadOpen,
					      UI.StoredPositions
					    ),UI.newRoster.setShiftsOpen(shift),
						UI.newRoster.updateLabourPerHour(UI.timeSlotsRowSelector(timeOpenSelect.value, UI.countHeadOpen)),
						UI.displayLabourHours(
                			UI.newRoster.getLabourPerHour(),
                			'orange',
                			'labour-hours-open-head')
			)
			
			//ELSE --------
			: 
			
			('');
		});
		
		console.log(UI.newRoster);
		
	}

  }
  
  //////////////// END OF CLASS ROSTER /////////////////////
  
  //////////////// CLASS SHIFT /////////////////////////////
  
  class Shift {
    constructor(id, employee, position, from, to, pause, hours) {
      this.id = id;
      this.employee = employee;
      this.position = position;
      this.from = from;
      this.to = to;
      this.break = pause;
      this.hours = hours;
    }
  }
  
  ///////////// END OF SHIFT CLASS /////////
  
  //////////// DEPLOYMENT CARD CLASS ///////
  
  class Deployment {
  	constructor(id, positions, t0, t35, t45, t55, t65, t75, t85, t95, t105){
		this.id = id;
		this.positions = positions;
		this.t0 = t0;
		this.t35 = t35;
		this.t45 = t45;
		this.t55 = t55;
		this.t65 = t65;
		this.t75 = t75;
		this.t85 = t85;
		this.t95 = t95;
		this.t105 = t105;
	}
  }
  
  /////// START OF UI CLASS ////////////////
  
  class UI {
	  
    static countHeadPre = 0;
    static countHeadOpen = 0;
    static countHeadClose = 0;
    static newRoster;
	static rosters = [];
  
    static StoredPositions = [
      "Cook",
      "Cashtill",
      "Packer",
      "Presenter",
      "Manager",
      "Drive Packer",
      "Drive Order",
      "Servis",
	  "Drive PickUp",
	  "Training",
	  "Lobby",
	  "Inventory",
	  "Wolt"
    ];
	  
    ////////////////COLOR POSITIONS /////////////////////////////////
    static colorPosition(position, el) {
      position == "Cook" ? (el.style.background = "#ff595e") : null;
      position == "Cashtill" ? (el.style.background = "#eccf1c") : null;
      position == "Packer" ? (el.style.background = "#8ac926") : null;
      position == "Presenter" ? (el.style.background = "#6a4c93") : null;
      position == "Manager" ? (el.style.background = "#f77f00") : null;
      position == "Drive Packer" ? (el.style.background = "#99582a") : null;
      position == "Drive Order" ? (el.style.background = "#f15bb5") : null;
      position == "Servis" ? (el.style.background = "#1982c4") : null;
	  position == "Drive PickUp" ? (el.style.background = "#c419b9") : null;
	  position == "Training" ? (el.style.background = "#19c4c1") : null;
	  position == "Lobby" ? (el.style.background = "#19c458") : null;
	  position == "Inventory" ? (el.style.background = "#191cc4") : null;
      position == "Wolt" ? (el.style.background = "#19c1c4") : null;
    }
	
  
	//////////////////// DISPLAY ROSTER /////////////////////////////////////
    static displayRoster(name = 'Empty') {
      const positions = UI.StoredPositions;	
      UI.rosters = Store.getRosters().filter((roster)=>{return roster.name == name});
		//console.log(UI.rosters);
      UI.rosters.forEach((roster) => {
 			UI.newRoster = new Roster(
		  roster.name,
          roster.timePreSelect,
          roster.timeOpenSelect,
          roster.timeCloseSelect,
          roster.countHeadPre,
          roster.countHeadOpen,
          roster.countHeadClose,
          roster.shiftsPre,
          roster.shiftsOpen,
          roster.shiftsClose,
          roster.labourPerHour,
		  roster.transactionsPerHour,
		  roster.deploymentCard
		  );
        //console.log(UI.newRoster);
		  
		UI.rosterNames(Store.getRosters(), 'roster-template-select', roster.name);
		UI.trsDays(Store.getTrs(Store.trs), 'day-select', Store.trs[0].Date );
		  
		  //LOAD THE OPENTIME HEADS ONLY IF THERE ARE TRS LOADED IN LOCAL STORRAGE HERE
		  
		  if(Store.trs.length > 1 ){
			  
			  UI.displayTimeHeadsFromLoadedTrs(Store.getTrs());
			  
		  		//console.log('Will load time heads');
		  } else {
		  		//console.log('will not load time heads');
		  }
		  //// END OF LOADING TRS IF EXITNING 
		  
        UI.addTimesRuler(
          UI.newRoster.timePreSelect,
          UI.newRoster.countHeadPre,
          "red",
          "time-pre-head",
          "total-pre"
        );
        UI.addTimesRuler(
          UI.newRoster.timeOpenSelect,
          UI.newRoster.countHeadOpen,
          "green",
          "time-open-head",
          "total-open"
        );
        UI.displayLabourHours(
          UI.newRoster.getLabourPerHour(),
          'orange',
          'labour-hours-open-head'
        );
        UI.addTimesRuler(
          UI.newRoster.timeCloseSelect,
          UI.newRoster.countHeadClose,
          "blue",
          "time-close-head",
          "total-close"
        );
        UI.addTimeSlots("time-pre-select");
        UI.addTimeSlots("time-open-select");
        UI.addTimeSlots("time-close-select");
        UI.addShiftToRoster(
          UI.newRoster.shiftsPre,
          "pre-row",
          UI.newRoster.timePreSelect,
          UI.newRoster.countHeadPre,
          positions
        );
        UI.addShiftToRoster(
          UI.newRoster.shiftsOpen,
          "open-row",
          UI.newRoster.timeOpenSelect,
          UI.newRoster.countHeadOpen,
          positions
        );
        UI.addShiftToRoster(
          UI.newRoster.shiftsClose,
          "close-row",
          UI.newRoster.timeCloseSelect,
          UI.newRoster.countHeadClose,
          positions
        );
        UI.countHeadPre = UI.newRoster.countHeadPre;
        UI.countHeadOpen = UI.newRoster.countHeadOpen;
        UI.countHeadClose = UI.newRoster.countHeadClose;
        document.getElementById("time-pre-select").value =
          UI.newRoster.timePreSelect;
        document.getElementById("time-open-select").value =
          UI.newRoster.timeOpenSelect;
        document.getElementById("time-close-select").value =
          UI.newRoster.timeCloseSelect;
      });
    }
	
	////////////////////// END OF DISPLAY ROSTER ///////////////////////
	
  
    //ADD SHIFT
    static addShiftToRoster(shifts, el, s, e, positions) {
      shifts.map((shift, index) => {
		  let hours = "";
        //TABLE CELLS
        let cellDataFrom = document.createElement("td");
        let cellDataTo = document.createElement("td");
        let cellDataPosition = document.createElement("td");
        let cellDataDelete = document.createElement("td");
  
        //SELECTS
        let selectElementFrom = document.createElement("select");
        let selectFromWrapper = document.createElement("div");
        selectFromWrapper.classList.add('select');
        selectFromWrapper.classList.add('width1');
        selectElementFrom.classList.add("from");

        let selectElementTo = document.createElement("select");
        let selectToWrapper = document.createElement("div");
        selectToWrapper.classList.add('select');
        selectToWrapper.classList.add('width1');
        selectElementTo.classList.add("to");

        let selectElementPosition = document.createElement("select");
        let selectPositionWrapper = document.createElement("div");
        selectPositionWrapper.classList.add('select');
        selectElementPosition.classList.add("position");
  
        //TABLE ROW
        let tableRowElement = document.createElement("tr");
        tableRowElement.id = shift.id;
  
        //DELETE BTN
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "X";
        deleteBtn.id = shift.id;
  
        UI.timeSlotsRowSelector(s, e).map((option) => {
          let optionElement = document.createElement("option");
          optionElement.innerHTML = option;
          optionElement.innerText == shift.from
            ? (optionElement.selected = "selected")
            : "";
          selectElementFrom.appendChild(optionElement);
        });
  
        UI.timeSlotsRowSelector(s, e).map((option) => {
          let optionElement = document.createElement("option");
          optionElement.innerHTML = option;
          optionElement.innerText == shift.to
            ? (optionElement.selected = "selected")
            : "";
          selectElementTo.appendChild(optionElement);
        });
  
        positions.map((position) => {
          let optionElement = document.createElement("option");
          optionElement.innerHTML = position;
          optionElement.innerText == shift.position
            ? (optionElement.selected = "selected")
            : "";
          selectElementPosition.appendChild(optionElement);
        });

        selectFromWrapper.appendChild(selectElementFrom);
        selectToWrapper.appendChild(selectElementTo);
        selectPositionWrapper.appendChild(selectElementPosition);

        cellDataFrom.appendChild(selectFromWrapper);
        cellDataTo.appendChild(selectToWrapper);
        cellDataPosition.appendChild(selectPositionWrapper);
        cellDataDelete.appendChild(deleteBtn);
  
        tableRowElement.appendChild(cellDataFrom);
        tableRowElement.appendChild(cellDataTo);
        tableRowElement.appendChild(cellDataPosition);
        tableRowElement.appendChild(cellDataDelete);
		  
		tableRowElement.querySelectorAll(".cell").forEach((e) => e.remove());
  
        UI.timeSlotsRowSelector(s, e).map((cell, index, arr) => {
          let timeCell = document.createElement("td");
          timeCell.classList.add("cell");
          //timeCell.innerText = cell;
          let from = arr.indexOf(shift.from);
          let to = arr.indexOf(shift.to);
			
          if(index >= from && index < to){
			  
		  	timeCell.classList.add("selected");
			 UI.colorPosition(shift.position,timeCell);
			  
			  index >= from
                  ? timeCell.setAttribute("colspan", to - from)
                  : timeCell;
			  
                arr.length = from + 1;
			 
                hours = (to - from) / 2;
                timeCell.innerText = `${hours} ${
                  hours < 2 ? "hour" : "hours"
                } - ${shift.position}`;
				
			  
		  } else {
			  
		  	timeCell.classList.add("unselected");
		  }
     		
          tableRowElement.appendChild(timeCell);
			
        });
  
        let element = document.getElementById(el).appendChild(tableRowElement);
  
		  
        //ADD EVENTS TO ALL SELECTS
        element.addEventListener("change", (el) => {
          let hours = "";
			
          //IF CLICKED ON A --------FROM----------- SELECT ELEMENT
          if (el.target.classList.contains("from")) {
            //ID TO UPDATE THE SHIFT IN THE SHIFT ARRAY OBJ
            tableRowElement.parentElement.id == "pre-row"
              ? UI.newRoster.setShiftsPreFrom(tableRowElement.id, el.target.value)
              : tableRowElement.parentElement.id == "open-row"
              ? UI.newRoster.setShiftsOpenFrom(
                  tableRowElement.id,
                  el.target.value
                )
              : tableRowElement.parentElement.id == "close-row"
              ? UI.newRoster.setShiftsCloseFrom(
                  tableRowElement.id,
                  el.target.value
                )
              : tableRowElement.parentElement;
            //console.log(UI.newRoster);
            
			  //UI
            tableRowElement.querySelectorAll(".cell").forEach((e) => e.remove());
			  
            UI.timeSlotsRowSelector(s, e).map((cell, index, arr) => {
              let timeCell = document.createElement("td");
              timeCell.classList.add("cell");
              //timeCell.innerText = cell;
              let from = arr.indexOf(el.target.value);
              let to = arr.indexOf(el.currentTarget.children[1].firstChild.firstChild.value);
              //console.log(el.currentTarget);
              //// UPDATE THE LABOUR PER HOUR 
              // console.log(element.parentElement.id);
              element.parentElement.id == 'open-row' ? UI.newRoster.updateLabourPerHour(arr) : null;
              element.parentElement.id == 'open-row' ? UI.displayLabourHours(
                UI.newRoster.getLabourPerHour(),
                'orange',
                'labour-hours-open-head'
              ) : null;

              if (index >= from && index < to) {
                timeCell.classList.add("selected");
                //GETTING THE POSITION VALUE FOR THE COLORPOSITION FUNC
                //console.log(el.currentTarget.children.item(2).firstChild.value);
                UI.colorPosition(
                  el.currentTarget.children.item(2).firstChild.firstChild.value,
                  timeCell
                );
				  
                index >= from
                  ? timeCell.setAttribute("colspan", to - from)
                  : timeCell;
                arr.length = from + 1;
				//console.log(arr);
                hours = (to - from) / 2;
                timeCell.innerText = `${hours} ${
                  hours < 2 ? "hour" : "hours"
                } - ${el.currentTarget.children.item(2).firstChild.firstChild.value}`;
				
                //UPDATE THE SHIFT OBJECT WITH HOURS PROPERTY
                tableRowElement.parentElement.id == "pre-row"
                  ? UI.newRoster.setHoursShiftsPre(tableRowElement.id, hours)
                  : tableRowElement.parentElement.id == "open-row"
                  ? UI.newRoster.setHoursShiftsOpen(tableRowElement.id, hours)
                  : tableRowElement.parentElement.id == "close-row"
                  ? UI.newRoster.setHoursShiftsClose(tableRowElement.id, hours)
                  : tableRowElement.parentElement;
                  //console.log(UI.newRoster);
              } else {
                timeCell.classList.add("unselected");
              }
              tableRowElement.appendChild(timeCell);
            });
			  

            //IF CLICKED ON A -------TO---------- SELECT ELEMENT
          } else if (el.target.classList.contains("to")) {
            //ID TO UPDATE THE SHIFT IN THE SHIFT ARRAY OBJ
            tableRowElement.parentElement.id == "pre-row"
              ? UI.newRoster.setShiftsPreTo(tableRowElement.id, el.target.value)
              : tableRowElement.parentElement.id == "open-row"
              ? UI.newRoster.setShiftsOpenTo(tableRowElement.id, el.target.value)
              : tableRowElement.parentElement.id == "close-row"
              ? UI.newRoster.setShiftsCloseTo(tableRowElement.id, el.target.value)
              : tableRowElement.parentElement;
            //console.log(UI.newRoster);
            //UI
            tableRowElement.querySelectorAll(".cell").forEach((e) => e.remove());
            UI.timeSlotsRowSelector(s, e).map((cell, index, arr) => {
              let timeCell = document.createElement("td");
              timeCell.classList.add("cell");
              //timeCell.innerText = cell;
              let from = arr.indexOf(
                el.currentTarget.firstChild.firstChild.firstChild.value
              );
              let to = arr.indexOf(el.target.value);

              //// UPDATE THE LABOUR PER HOUR
              //console.log(element.parentElement.id); TO UPDATE AND DISPLAY ONLY IF THIS IS CLICKED ON
              element.parentElement.id == 'open-row' ? UI.newRoster.updateLabourPerHour(arr) : null;
              element.parentElement.id == 'open-row' ? UI.displayLabourHours(
                UI.newRoster.getLabourPerHour(),
                'orange',
                'labour-hours-open-head'
              ) : null;

              if (index >= from && index < to) {
                timeCell.classList.add("selected");
                //GETTING THE POSITION VALUE FOR THE COLORPOSITION FUNC
                //console.log(el.currentTarget.children.item(2).firstChild.value);
                UI.colorPosition(
                  el.currentTarget.children.item(2).firstChild.firstChild.value,
                  timeCell
                );
                index >= from
                  ? timeCell.setAttribute("colspan", to - from)
                  : timeCell;
                arr.length = from + 1;
                hours = (to - from) / 2;
                timeCell.innerText = `${hours} ${
                  hours < 2 ? "hour" : "hours"
                } - ${el.currentTarget.children.item(2).firstChild.firstChild.value}`;
                //UPDATE THE SHIFT OBJECT WITH HOURS PROPERTY
                tableRowElement.parentElement.id == "pre-row"
                  ? UI.newRoster.setHoursShiftsPre(tableRowElement.id, hours)
                  : tableRowElement.parentElement.id == "open-row"
                  ? UI.newRoster.setHoursShiftsOpen(tableRowElement.id, hours)
                  : tableRowElement.parentElement.id == "close-row"
                  ? UI.newRoster.setHoursShiftsClose(tableRowElement.id, hours)
                  : tableRowElement.parentElement;
                //console.log(UI.newRoster);
              } else {
                timeCell.classList.add("unselected");
              }
              tableRowElement.appendChild(timeCell);
            });
            //IF CLICKED ON A --------POSITION------------ SELECT ELEMENT
          } else if (el.target.classList.contains("position")) {
            //ID TO UPDATE THE SHIFT IN THE SHIFT ARRAY OBJ
            tableRowElement.parentElement.id == "pre-row"
              ? UI.newRoster.setPositionShiftsPre(
                  tableRowElement.id,
                  el.target.value
                )
              : tableRowElement.parentElement.id == "open-row"
              ? UI.newRoster.setPositionShiftsOpen(
                  tableRowElement.id,
                  el.target.value
                )
              : tableRowElement.parentElement.id == "close-row"
              ? UI.newRoster.setPositionShiftsClose(
                  tableRowElement.id,
                  el.target.value
                )
              : tableRowElement.parentElement;
            console.log(UI.newRoster);
            //CHANGE COLOR--------------------------------------------------------
            const selected = el.currentTarget.querySelectorAll(".selected");
            selected[0]
              ? (UI.colorPosition(el.target.value, selected[0]),
                (selected[0].innerText = `${
                  selected[0].getAttribute("colspan") / 2
                } ${
                  selected[0].getAttribute("colspan") / 2 < 2 ? "hour" : "hours"
                } - ${el.target.value}`))
              : null;
          }
        });
  
        //ADD EVENT TO ALL DELETE BTNs
        element.addEventListener("click", (el) => {
          if (el.target.classList.contains("delete-btn")) {
            
            //REMOVE FROM ROSTER OBJECT
            tableRowElement.parentElement.id == "pre-row"
              ? UI.newRoster.removeShiftsPre(el.target.id)
              : tableRowElement.parentElement.id == "open-row"
              ? UI.newRoster.removeShiftsOpen(el.target.id)
              : tableRowElement.parentElement.id == "close-row"
              ? UI.newRoster.removeShiftsClose(el.target.id)
              : tableRowElement.parentElement;

            //// UPDATE THE LABOUR PER HOUR
              //console.log(element.parentElement.id); TO UPDATE AND DISPLAY ONLY IF THIS IS CLICKED ON
              element.parentElement.id == 'open-row' ? UI.newRoster.updateLabourPerHour(UI.timeSlotsRowSelector(s, e)) : null;
              element.parentElement.id == 'open-row' ? UI.displayLabourHours(
                UI.newRoster.getLabourPerHour(),
                'orange',
                'labour-hours-open-head'
              ) : null;

            //REMOVE FROM UI
            el.currentTarget.id == el.target.id
              ? el.currentTarget.remove()
              : el.currentTarget;
          }
        });
      });
    }
  
  /////////////// END OF AD SHIFT TO ROSTER ////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
	
  /////////////// DISPLAY DEPLOYMENT ROW ///////////////////////////////////////////
	
  static displayDeploymentRow(roster, positionsAll){
  	  const table = document.getElementById('deployment-table');
	  const tableBody = table.firstElementChild.nextElementSibling;
	  tableBody.querySelectorAll('.table-row').forEach((e) => e.remove());
	  
	  //console.log(tableBody);
	  
	  roster.deploymentCard.map((row)=>{
		//TABLE ROW
		const tableRowElement = document.createElement('tr');
			  tableRowElement.classList.add('table-row');
		  	  tableRowElement.id = row.id;
		  
		//TABLE CELLS
		const selectTableData = document.createElement('td');
		const deleteBtnTableData = document.createElement('td');
		//DESTRUCTURE THE ROW OBJECT TO GET ONLY THE CHECKBOXES
		const {id, positions,...checkBoxes} = row;
		//console.log(checkBoxes);
		  
		// SELECT
		const selectWrapper = document.createElement('div');
		  	  selectWrapper.classList.add('select');
		const selectPositions = document.createElement('select');
		      selectWrapper.appendChild(selectPositions);
		      selectTableData.appendChild(selectWrapper);
		  
		//DELETE BTN
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "X";
        deleteBtn.id = row.id;
		deleteBtnTableData.appendChild(deleteBtn);
		  
		positionsAll.map((position) => {
          let optionElement = document.createElement("option");
          optionElement.innerHTML = position;
          optionElement.innerText == row.positions
            ? (optionElement.selected = "selected")
            : "";
          selectPositions.appendChild(optionElement);
        });
		
		//ADD EACH TABLE DATA TO THE TABLE ROW
		tableRowElement.appendChild(selectTableData);
		tableRowElement.appendChild(deleteBtnTableData);
		
		//ITERATE THROUGH THE CHECKBOX DESTRUCTURED --ROW-- OBJECT KEYS TO CREATE THE CHECBOXES
		Object.keys(checkBoxes).forEach((key, index)=>{
			const td = document.createElement('td');
		    const check = document.createElement('input');
				  check.setAttribute('type', 'checkbox');
		          check.classList.add(key);
				  checkBoxes[key] == 0 ? check.checked = false : check.checked = true; 
			td.appendChild(check);
			tableRowElement.appendChild(td);
		});
		
		//FINALLY APPEND THE WHOLE ROW
		tableBody.appendChild(tableRowElement);	
			
		
		//ADD EVENT LISTEENERES TO SELECTS POSITONS
		tableRowElement.addEventListener('change', (el)=>{
			//console.log(el.currentTarget.id, el.target.type);
			el.target.type == 'select-one' ? 
			UI.newRoster.setDeploymentPosition(
			el.currentTarget.id,
			el.target.value
			) : '';
			
			el.target.type == 'checkbox' ? 
			UI.newRoster.setCheckBox(el.currentTarget.id, el.target.classList)
			 : '';
			console.log(UI.newRoster);
		});
		
		//ADD EVENT LISTENERS TO DELETE BTN
		tableRowElement.addEventListener('click', (el)=>{
			//console.log(el.currentTarget.id);
			UI.newRoster.deleteDeploymentRow(el.target.id);
			
			//REMOVE FROM UI
            el.currentTarget.id == el.target.id
              ? el.currentTarget.remove()
              : el.currentTarget;
			//console.log(UI.newRoster);
		});
		
	});
  }
  
  
  /////////////// END OF DISPLAY DEPLOYMENT ROW ////////////////////////////////
	
    //TOTAL HOURS
    static displayTotalHours(arr, el) {
      const totalElement = document.getElementById(el);
      totalElement.innerHTML = arr.length ? arr.length / 2 - 0.5 : arr.length;
    }
  
    //TABLE HEADERS
    static addTimesRuler(s = "10:00", e = 0, color = "red", el1, el2) {
      const tableHead = document.getElementById(el1);
      let hours = s.split(":");
      const result = [];
      let count = hours[1] == "30" ? 30 : 0;
      for (let i = 0; i < e; i++) {
        const time = new Date();
        time.setHours(hours[0]);
        time.setMinutes(count);
        time.setSeconds("00");
        result.push(time);
        count += 30;
      }
      let output = result.map((time) => {
        return `<td class="time-number ${color}">${
          (time.getHours() < 10 ? "0" : "") + time.getHours()
        }:${(time.getMinutes() < 10 ? "0" : "") + time.getMinutes()}</td>`;
      });
      const rowHeadEmpty = `<th>FROM</th><th class="width">TO</th><th>POSITION</th><th></th>`;
      output.unshift(rowHeadEmpty);
      tableHead.innerHTML = output.join("");
      UI.displayTotalHours(result, el2);
    }

    //TABLE LABOUR HEADER
    static displayLabourHours (arr, color = "orange", el1){
      //console.log(arr);
      let reducedArr = [];
      for (let i = 0; i < arr.length; i = i + 2){
        arr[i] + arr[i+1] ? reducedArr.push(arr[i] + arr[i+1]) : reducedArr.push(0);
      }
      //console.log(reducedArr);
      const tableHead = document.getElementById(el1);
      let output = reducedArr.map((item, index, arr) => {
        //console.log(arr.length-1); gettin the last array item
        return `<td class="labour-number ${color}" colspan="${index == arr.length-1 && item < 1 ? '1' : '2'}">${item}</td>`;
      });
      const rowHeadEmpty = `<th></th><th class="width"></th><th class="labour-plan">LABOUR PLAN</th><th></th>`;
      output.unshift(rowHeadEmpty);
      tableHead.innerHTML = output.join("");
    }
  
    //TIMES FOR SELECT IN DOM
    static addTimeSlots(el) {
      const timeSlots = document.getElementById(el);
      const result = [];
      let count = 0;
      for (let i = 0; i < 48; i++) {
        const time = new Date();
        time.setHours("00").toLocaleString("en-US");
        time.setMinutes(count);
        time.setSeconds("00");
        result.push(time);
        count += 30;
      }
      let output = result.map((time) => {
        return `<option>${(time.getHours() < 10 ? "0" : "") + time.getHours()}:${
          (time.getMinutes() < 10 ? "0" : "") + time.getMinutes()
        }</option>`;
      });
      timeSlots.innerHTML = output.join("");
    }
  
    //TIMES FOR ROW SELECT DYNAMIC - RETURNS JUST THE ARRAY OF TIMES
    static timeSlotsRowSelector(s = "10:00", e = 0) {
      let hours = s.split(":");
      const result = [];
      let count = hours[1] == "30" ? 30 : 0;
      for (let i = 0; i < e; i++) {
        const time = new Date();
        time.setHours(hours[0]);
        time.setMinutes(count);
        time.setSeconds("00");
        result.push(time);
        count += 30;
      }
      let output = result.map((time) => {
        return `${(time.getHours() < 10 ? "0" : "") + time.getHours()}:${
          (time.getMinutes() < 10 ? "0" : "") + time.getMinutes()
        }`;
      });
      return output;
    }
	
	static displayTimeHeadsFromLoadedTrs(trsFromStore){
		
		//CLEAR HEAD OBJECT
		UI.countHeadOpen = 0;
		
		//GET THE TRS AND DISPLAY THE TIMES HEADS FROM LOADED TRS  --- FUNCTION START /////
			const trs = trsFromStore;
	  		const selectedTrs = trs[1];
			
			//MAKE THE NEW trsArr
			//console.log(selectedTrs);
	  		const keys = Object.keys(selectedTrs);
	  		const values = Object.values(selectedTrs);
	  		values.shift();
	  		keys.shift();
			
			// PREPARING THE TRSARRAY
	  		//console.log(keys, values);
	  		const trsArr = keys.map((key, index)=>{
	  		return { [key] : values[index]};
	  		}); 
	  		//console.log(trsArr);
			
			    //// UPDATE THE UI ///// //console.log(trsArr); 
				  UI.addTimesRuler(
			      keys[0],
			      UI.countHeadOpen,
			      "green",
			      "time-open-head",
			      "total-open"
			    );
				//SETTING THE TIME OPEN SEPELCT TO THE CORRECT START ON THE OBJECT
			    UI.newRoster.setTimeOpenSelect(keys[0]);
			
			    //SETTING HOW MANY HOURS THERE ARE IN THE EXCELL WITH TRS
				const hours = (keys.length*2)-1;
			
			    // LOOP TO CREATE ALL TIME HEADS THE NUMBER OF TIMES OF HOURS
				  for (let i = 0; i < hours; i++ ){
					UI.countHeadOpen++;
			    	UI.addTimesRuler(
			        keys[0],
			        UI.countHeadOpen,
			        "green",
			        "time-open-head",
			        "total-open"
			        );
			    	UI.newRoster.setCountHeadOpen(UI.countHeadOpen);
			    	//UI.newRoster.setLabourPerHour(UI.countHeadOpen);
					UI.newRoster.setTransactionsPerHour(UI.timeSlotsRowSelector(keys[0],UI.countHeadOpen));
					//DISPLAY THE LABOUR HOURS HEADS AS WELL
					UI.displayLabourHours(
                	UI.newRoster.getLabourPerHour(),
                		'orange',
                		'labour-hours-open-head'
              		);
				  }
				  
				  // UPDATE THE OPEN SELECT WITH THE TRS TIME OPEN START
				  const selectOpen = document.getElementById("time-open-select");
				  const arr = Array.prototype.slice.call(selectOpen.options)
						arr.forEach((item)=>{
							item.value == keys[0] ? item.selected = true : item;	
			});
	 	///////END OF UPDATE UI with head times ////
		
	}
	
	
	//TRS DAYS FOR ROSTER SELECT DAY
	static trsDays(trs, el, selected){
		const element = document.getElementById(el);
		let days = trs.map((t)=>{return `<option>${t.Date}</options>`});
		element.innerHTML = days.join("");
		element.value = selected;
	}
	
	//ROSTER NAMES FOR THE ROSTER SELECT
	static rosterNames (rosters, el, selected){
		const element = document.getElementById(el);
		let names = rosters.map((roster)=>{return `<option>${roster.name}</options>`});
		element.innerHTML = names.join("");
		element.value = selected;
			}
	}
	

  ///////////////////// END OF UI CLASS ////////////////////////////////
	

  //////////////////// E V E N T S /////////////////////////////////////	
	
  //////////////////////////////////////////////////////////////////////
  //EVENTS ON DOM LOAD
  document.addEventListener("DOMContentLoaded", () => {
    UI.displayRoster();
	 console.log(UI.newRoster);
  });
	
  // OPEN THE DIALOG FOR DEPLOYMENT CARD /////////////////////////////
	
	const openModal = document.querySelector('.open-modal');
	const closeModal = document.querySelector('.close-modal');
	const modal = document.querySelector('.modal');
	
	openModal.addEventListener('click', ()=>{
		UI.displayDeploymentRow(UI.newRoster,UI.StoredPositions);
		modal.showModal();
	});
	
	closeModal.addEventListener('click', ()=>{
		modal.close();
	});
	
	//console.log(openModal, closeModal, modal);
  // END OF OPEN DEPLOYMENT CARD
	

  // ADD DEPLOYMENT ROW ////
	
	const addDeployment = document.querySelector('.add-deployment');
	addDeployment.addEventListener('click', (e)=>{
		//console.log(e.target);
		UI.newRoster.setDeploymentId();
		const deploymentRow = new Deployment(
			Math.max(...Roster.deploymentIds),
			UI.StoredPositions[0],
			1, 1, 1, 1, 1, 1, 1, 1, 1
			);
		UI.newRoster.setDeploymentRow(deploymentRow);
		UI.displayDeploymentRow(UI.newRoster,UI.StoredPositions);
		console.log(UI.newRoster);
	})
	
  // END OF ADD DEPLOYMENT ROW ///
	
	
  //LOAD TRS FROM EXCEL FILE
  document.getElementById("input-trs").onchange = (evt) => {
    // (A) NEW FILE READER
    var reader = new FileReader();
        // (B) ON FINISH LOADING
	  
		reader.addEventListener("loadend", (evt) => {
		    // (B1) GET THE FIRST WORKSHEET
		    var workbook = XLSX.read(evt.target.result, {type: "binary"}),
		        worksheet = workbook.Sheets[workbook.SheetNames[0]],
		        range = XLSX.utils.decode_range(worksheet["!ref"]);
		    // (B2) READ CELLS IN ARRAY
		    var data = [];
		    for (let row=range.s.r; row<=range.e.r; row++) {
		      let i = data.length;
		      data.push([]);
		      for (let col=range.s.c; col<=range.e.c; col++) {
		        let cell = worksheet[XLSX.utils.encode_cell({r:row, c:col})];
		        data[i].push(cell);
		      }
		    }
		    //console.log(data);
			const trsPerHour = data.map((item, index)=>{
					let values = item.map((row, index)=>{
						return row.w;
					});
					let keys = data[0].map((key, index)=>{
						return {
							[key.w] : values[index]
						}	
					});
					return keys;
				});
			
			trsPerHour.shift();
			
			const obj = trsPerHour.map((trs)=>{
				const returnedTarget = Object.assign({},...trs);
				return returnedTarget;
				});
			//console.log(obj[1]['14:00']);
			Store.addTrs(obj);
			UI.trsDays(Store.getTrs(Store.trs), 'day-select', Store.trs[0].Date);
			
		//GET THE TRS AND DISPLAY THE TIMES HEADS FROM LOADED TRS  --- FUNCTION START /////
			UI.displayTimeHeadsFromLoadedTrs(Store.getTrs());
	 	///////END OF UPDATE UI with head times ////
			console.log(UI.newRoster);
				  
		});
	  
	// END OF FINISH LOADING
	  
    // (C) START - READ SELECTED EXCEL FILE
    reader.readAsArrayBuffer(evt.target.files[0]);
  };
  
  //EVENT SELECT DAY ON ROSTER - TO SELECT A SPECIFIC DAY TRS
  
  const selectDay = document.getElementById('day-select');
  selectDay.addEventListener('change', (e)=>{
	  const trs = Store.getTrs();
	  const selectedTrs = trs.find((item)=>{
	  		return item.Date == e.target.value;
	  });
	  //console.log(selectedTrs);
	  const keys = Object.keys(selectedTrs);
	  const values = Object.values(selectedTrs);
	  values.shift();
	  keys.shift();
	  //console.log(keys, values);
	  
	  const trsArr = keys.map((key, index)=>{
	  	return { [key] : values[index]};
	  }); 
	  
	  //console.log(trsArr); //// UPDATE THE UI /////
	  /*
	  UI.addTimesRuler(
      keys[0],
      UI.countHeadOpen,
      "green",
      "time-open-head",
      "total-open"
    );
    UI.newRoster.setTimeOpenSelect(keys[0]);
	  
	const hours = (keys.length*2)-1;
	  for (i = 0; i < hours; i++ ){
		UI.countHeadOpen++;
    	UI.addTimesRuler(
        keys[0],
        UI.countHeadOpen,
        "green",
        "time-open-head",
        "total-open"
        );
    	UI.newRoster.setCountHeadOpen(UI.countHeadOpen);
    	UI.newRoster.setLabourPerHour(UI.countHeadOpen);
		UI.newRoster.setTransactionsPerHour(UI.timeSlotsRowSelector(keys[0],UI.countHeadOpen));  
	  }
	  
	  // UPDATE THE OPEN SELECT WITH THE TRS TIME OPEN START
	  const selectOpen = document.getElementById("time-open-select");
	  const arr = Array.prototype.slice.call(selectOpen.options)
			arr.forEach((item)=>{
				item.value == keys[0] ? item.selected = true : item;	
			});
	  */
	  //END OF UPDATE UI with head times ////
	  
	  //UPDATE THE NEW ROSTER TRSPERHOUR
	  
	  UI.newRoster.updateTransactionsPerHour(trsArr);
		//console.log(UI.newRoster);
	  
	    UI.newRoster.sumIdealHours();
  });
	
  
  //EVENT SELECT ROSTER TO LOAD FROM LOCAL STORAGE
  const selectRoster = document.getElementById('roster-template-select');
	selectRoster.addEventListener('change', (e)=>{
		
		//CLEAR ALL TABLE ROWS FROM UI BEFORE LOADING NEW
		const openElements = document.querySelector('#open-row');
		openElements.querySelectorAll('tr').forEach(item=> item.remove());
		
		const preElements = document.querySelector('#pre-row');
		preElements.querySelectorAll('tr').forEach(item=> item.remove());
		
		const closeElements = document.querySelector('#close-row');
		closeElements.querySelectorAll('tr').forEach(item=> item.remove());
		
		//CLEAR DATA ARRAY AND HEAD COUNT
		UI.rosters = [];
		UI.countHeadOpen = 0;
		
		//RENDER NEW IN UI
		UI.displayRoster(e.target.value);
		console.log(UI.newRoster);
	});
  
  //EVENT SAVE ROSTER BUTTON
  const saveRoster = document.getElementById('save-roster');
  saveRoster.addEventListener('click', (e)=>{
  		let rosterName = prompt('Please enter a NEW ROSTER NAME.', '');
	  	UI.newRoster.setRosterName(rosterName);
	    Store.addRoster(UI.newRoster);
	    UI.rosterNames(Store.getRosters(), 'roster-template-select');
	 // console.log(UI.newRoster);
	  
  });
	
  // DELETE ROSTER BUTTON
	const deleteRoster = document.getElementById('delete-roster');
	deleteRoster.addEventListener('click', (e)=>{
		Store.removeRoster(selectRoster.value);
	});
	
  //UPDATE ROSTER BUTTON
	const updateRoster = document.getElementById('update-roster');
	updateRoster.addEventListener('click', (e)=>{
		Store.updateRoster(selectRoster.value, UI.newRoster);
	});
  
  //EVENTS ADD PRE SHIFT
  const addRowPreBtn = document.getElementById("add-row-pre-btn");
  addRowPreBtn.addEventListener("click", (e) => {
    const timePreSelect = document.getElementById("time-pre-select");
    UI.newRoster.setPreShiftId();
	  let shift = new Shift(
      Math.max(...Roster.preShiftsIds),
      "",
      UI.StoredPositions[0],
      timePreSelect.value,
      timePreSelect.value,
      ""
    );
    UI.addShiftToRoster(
      [shift],
      "pre-row",
      timePreSelect.value,
      UI.countHeadPre,
      UI.StoredPositions
    );
    UI.newRoster.setShiftsPre(shift);
    //console.log(UI.newRoster);
  });
  
  //EVENTS ADD OPEN SHIFT
  const addRowOpenBtn = document.getElementById("add-row-open-btn");
  addRowOpenBtn.addEventListener("click", (e) => {
    const timeOpenSelect = document.getElementById("time-open-select");
	UI.newRoster.setOpenShiftId();
	//console.log(Roster.openShiftsIds);  
    let shift = new Shift(
      Math.max(...Roster.openShiftsIds),
      "",
      UI.StoredPositions[0],
      timeOpenSelect.value,
      timeOpenSelect.value,
      ""
    );
    UI.addShiftToRoster(
      [shift],
      "open-row",
      timeOpenSelect.value,
      UI.countHeadOpen,
      UI.StoredPositions
    );
    UI.newRoster.setShiftsOpen(shift);
    //console.log(UI.newRoster);
  });
  
  //EVENTS ADD CLOSE SHIFT
  const addRowCloseBtn = document.getElementById("add-row-close-btn");
  addRowCloseBtn.addEventListener("click", (e) => {
    const timeCloseSelect = document.getElementById("time-close-select");
	  UI.newRoster.setCloseShiftId();
    let shift = new Shift(
      Math.max(...Roster.closeShiftsIds),
      "",
      UI.StoredPositions[0],
      timeCloseSelect.value,
      timeCloseSelect.value,
      ""
    );
    UI.addShiftToRoster(
      [shift],
      "close-row",
      timeCloseSelect.value,
      UI.countHeadClose,
      UI.StoredPositions
    );
    UI.newRoster.setShiftsClose(shift);
    //console.log(UI.newRoster);
  });
  
  //EVENTS TABLE HEAD SELECTS - PRE
  const timePreSelect = document.getElementById("time-pre-select");
  timePreSelect.addEventListener("change", (e) => {
    UI.addTimesRuler(
      e.target.value,
      UI.countHeadPre,
      "red",
      "time-pre-head",
      "total-pre"
    );
    UI.newRoster.setTimePreSelect(e.target.value);
    //console.log(UI.newRoster);
  });
  
  const incrementPreBtn = document.getElementById("increment-pre-btn");
  incrementPreBtn.addEventListener("click", (e) => {
    UI.countHeadPre++;
    UI.addTimesRuler(
      timePreSelect.value,
      UI.countHeadPre,
      "red",
      "time-pre-head",
      "total-pre"
    );
    UI.newRoster.setCountHeadPre(UI.countHeadPre);
    //console.log(UI.newRoster);
  });
  
  const decrementPreBtn = document.getElementById("decrement-pre-btn");
  decrementPreBtn.addEventListener("click", (e) => {
    UI.countHeadPre--;
    UI.addTimesRuler(
      timePreSelect.value,
      UI.countHeadPre,
      "red",
      "time-pre-head",
      "total-pre"
    );
    UI.newRoster.setCountHeadPre(UI.countHeadPre);
    //console.log(UI.newRoster);
  });
  
  //EVENTS TABLE HEAD SELECTS - OPEN
  const timeOpenSelect = document.getElementById("time-open-select");
  timeOpenSelect.addEventListener("change", (e) => {
    UI.addTimesRuler(
      e.target.value,
      UI.countHeadOpen,
      "green",
      "time-open-head",
      "total-open"
    );
    UI.newRoster.setTimeOpenSelect(e.target.value);
    //console.log(UI.newRoster);
  });
  
  const incrementOpenBtn = document.getElementById("increment-open-btn");
  incrementOpenBtn.addEventListener("click", (e) => {
    UI.countHeadOpen++;
    UI.addTimesRuler(
      timeOpenSelect.value,
      UI.countHeadOpen,
      "green",
      "time-open-head",
      "total-open"
    );
    UI.newRoster.setCountHeadOpen(UI.countHeadOpen);
    UI.newRoster.setLabourPerHour(UI.countHeadOpen);
	UI.newRoster.setTransactionsPerHour(UI.timeSlotsRowSelector(timeOpenSelect.value,UI.countHeadOpen));  
    console.log(UI.newRoster);
  });
  
  const decrementOpenBtn = document.getElementById("decrement-open-btn");
  decrementOpenBtn.addEventListener("click", (e) => {
    UI.countHeadOpen--;
    UI.addTimesRuler(
      timeOpenSelect.value,
      UI.countHeadOpen,
      "green",
      "time-open-head",
      "total-open"
    );
    UI.newRoster.setCountHeadOpen(UI.countHeadOpen);
    UI.newRoster.setLabourPerHour(UI.countHeadOpen);
    //console.log(UI.newRoster);
  });
  
  //EVENTS TABLE HEAD SELECTS - CLOSE
  const timeCloseSelect = document.getElementById("time-close-select");
  timeCloseSelect.addEventListener("change", (e) => {
    UI.addTimesRuler(
      e.target.value,
      UI.countHeadClose,
      "blue",
      "time-close-head",
      "total-close"
    );
    UI.newRoster.setTimeCloseSelect(e.target.value);
    //console.log(UI.newRoster);
  });
  
  const incrementCloseBtn = document.getElementById("increment-close-btn");
  incrementCloseBtn.addEventListener("click", (e) => {
    UI.countHeadClose++;
    UI.addTimesRuler(
      timeCloseSelect.value,
      UI.countHeadClose,
      "blue",
      "time-close-head",
      "total-close"
    );
    UI.newRoster.setCountHeadClose(UI.countHeadClose);
    //console.log(UI.newRoster);
  });
  
  const decrementCloseBtn = document.getElementById("decrement-close-btn");
  decrementCloseBtn.addEventListener("click", (e) => {
    UI.countHeadClose--;
    UI.addTimesRuler(
      timeCloseSelect.value,
      UI.countHeadClose,
      "blue",
      "time-close-head",
      "total-close"
    );
    UI.newRoster.setCountHeadClose(UI.countHeadClose);
    //console.log(UI.newRoster);
  });
  