import bananaImg from "../assets/banana.png"
import "./Banana.css"
import { useDispatch, useSelector } from 'react-redux';
import {increment} from "../state/counter";
import {useAppSelector} from "../hooks"

const Banana = () =>{
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useDispatch();

    class BananaClass{
        numClick
        powerClick
        constructor(numClick:number, powerClick:number){
            this.numClick = numClick;
            this.powerClick = powerClick;
        }
    
        click = () => {
            dispatch(increment(this.powerClick))
        }
    }

    const banana = new BananaClass(0,2)
 
    return(
        <div className="banana-container">
            <img src={bananaImg} alt="banana" />

            <button onClick={banana.click}>
                Increment Banana {count}
                </button>
        </div>
    )
}

export default Banana;