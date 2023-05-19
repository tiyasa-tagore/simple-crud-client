
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loaderUser = useLoaderData();
    const handleUpdate =event =>{
        event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser ={ name, email};

    fetch(`http://localhost:5000/users/${loaderUser._id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify( updatedUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount>0){
            alert('user updated successfully')
        }
    })
    }


    return (
        <div>
            <h3>updat info of {loaderUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loaderUser?. name
                }/> <br />
                <input type="email" name="email" defaultValue={loaderUser?. email
                }/> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;