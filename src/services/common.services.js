import { BehaviorSubject, timer } from "rxjs";

export class ElevatorStopService {
    stoped = new BehaviorSubject(true);

    moving = () => {
        this.stoped.next(false)
    }

    stop = () => {
        timer(1000).subscribe( _ => {
            this.stoped.next(true)
        })
    }
}