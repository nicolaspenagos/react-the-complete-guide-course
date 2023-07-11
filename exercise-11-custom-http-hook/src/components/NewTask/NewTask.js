import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const { isLoading, error, sendRequest: postTask } = useHttp();

  const createTask = (taskText,taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }
  const enterTaskHandler = async (taskText) => {
    const data = await postTask( {
      url: "https://rule-engine-front-default-rtdb.firebaseio.com/tasks.json",
      method:"POST",
      header:{
        'Content-Type':'application/json'
      },
      body:{text:taskText}
    }, createTask.bind(null, taskText));
   
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
