import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar'

export const EOM = ({employee}) => {
    console.log(employee, 'pas')
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee Of The Month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
    );

    const employee = await apiResponse.json();

    employee.image = "https://images.firstpost.com/wp-content/uploads/2021/07/Messi640.jpg?impolicy=website&width=640&height=363";

    return {
        props: {
            employee
        }
    }
}

export default EOM;