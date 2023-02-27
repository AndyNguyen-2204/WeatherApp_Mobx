import moment from "moment"
import Icon from 'react-native-vector-icons/Fontisto'
import Icon1 from 'react-native-vector-icons/FontAwesome'

export const ativeViewWeather = (time, valueTab) => {
    const timeconvert = new Date(moment.unix(time))
    const currentTime = new Date()
    const hour = timeconvert.getHours()
    const date = timeconvert.getDate()
    if (valueTab === 1) {
        if (hour === currentTime.getHours() && date === currentTime.getDate()) {
            return true
        } else {
            return false
        }
    } else if (valueTab === 2) {
        if (date === currentTime.getDate()) {
            return true
        } else {
            return false
        }
    }
}

export const renderIcon = (status, uvi) => {
    if (status === "Clouds" && uvi !== 0) {
        return <Icon name='cloudy' color={"#ffffff"} size={25} />
    } else if (status === "Rain") {
        return <Icon name='rain' color={"#ffffff"} size={25} />
    } else if (status === "Clear" && uvi !== 0) {
        return <Icon name='day-sunny' color={"#ffffff"} size={25} />
    } else if (uvi === 0) {
        return <Icon name='night-clear' color={"#ffffff"} size={25} />
    } else if (status === "Snow") {
        return <Icon1 name='snowflake-o' color={"#ffffff"} size={25} />
    }
}