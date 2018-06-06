let store = {drivers: [], passengers: [] ,trips: []}
let userId = 0
let passengerId = 0
let tripId = 0


class Driver {

    constructor(name){
      this.name = name
      this.id = ++userId
      store.drivers.push(this)
    }

    trips(){
      return store.trips.filter(trip =>{
       return trip.driverId === this.id 
       });
    }

   passengers(){
      return this.trips().map(trip =>{
       return trip.passenger();
       });

    }
}


class Passenger {

    constructor(name){
      this.name = name
      this.id = ++passengerId
      store.passengers.push(this)
    }

    trips(){
      return store.trips.filter(trip=>{
        return this.id == trip.passengerId
       });
    }

    drivers(){
      return this.trips().map(trip=>{
        return trip.driver();
       });
    }
}


class Trip {

    constructor(driver,passenger){
      this.id = ++tripId
      this.passengerId = passenger.id
      this.driverId = driver.id
      store.trips.push(this)
    }

    passenger(){
      return store.passengers.find(passenger =>{
       return passenger.id === this.passengerId;
      });
    }

    driver(){
      return store.drivers.find(driver =>{
        return driver.id = this.driverId;
       });
      
    }
}


