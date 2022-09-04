import { useSelector } from 'react-redux'


export const RetrieveChartData = () => {

    const subjectCount = useSelector((state) => state.quizCount.value)

    let label = subjectCount.map((data) => {
        const labelName = data.quizmonth
        return labelName
    })

    let labelCount = subjectCount.map((data) => {
        const count = data.subjectCount;
        return count;
    })

    return {label}
}
