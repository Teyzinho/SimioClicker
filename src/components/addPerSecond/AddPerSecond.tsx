import { useDispatch } from "react-redux"
import { addPerSecont } from "../../state/counterSlice"
import { useEffect } from "react";
import { useAppSelector } from '../../hooks';
import "./addPerSecons.css"
import bananaImg from "../../assets/bananaIcon.png"


const AddPerSecond = () => {
    const dispatch = useDispatch();
    const addPerSecondValue = useAppSelector((state) => state.counter.addPerSecond);
    const count = useAppSelector((state) => state.counter.value);

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(addPerSecont());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, [dispatch])

    return (
        <div className="addPerSecond">
            <div>
                <img src={bananaImg} alt="bananaImg" />
                <h2>
                    {count}
                </h2>
            </div>

            <h3>
                Bps {addPerSecondValue}
            </h3>

        </div>
    )

}

export default AddPerSecond