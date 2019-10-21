class MyDate {
    constructor(hours, minutes, seconds){
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
    }

    getFormattedDate(){
        return `${this.prependZero(this._hours)}:${this.prependZero(this._minutes)}:${this.prependZero(this._seconds)}`;
    }

    prependZero(data){
        if(data < 10){
            return '0'+ data;
        }
        return data;
    }
}

mon = new MyDate(2,53,45);
console.log(mon.getFormattedDate());