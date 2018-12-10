const data = [
    {
        name: 'Anshit',
        age : 8,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Delhi',
        image: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    {
        name: 'Rahul',
        age: 24,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Delhi',
        image: 'https://randomuser.me/api/portraits/men/35.jpg'
    },
    {
        name: 'Akash',
        age: 23,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Delhi',
        image: 'https://randomuser.me/api/portraits/men/39.jpg'
    },
    {
        name: 'Ravi',
        age: 22,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Patna',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: 'Deepak',
        age: 24,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Delhi',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
    }
];

const profiles = profileIterator(data);


nextProfile();


document.getElementById('next').addEventListener('click', nextProfile);


function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
        <ul class = "list-group">
            <li class = "list-group-item">Name: ${currentProfile.name}</li>
            <li class = "list-group-item">Age: ${currentProfile.age}</li>
            <li class = "list-group-item">Gender: ${currentProfile.gender}</li>
            <li class = "list-group-item">Looking For: ${currentProfile.lookingfor}</li>
            <li class = "list-group-item">Location: ${currentProfile.location}</li>
            <li class = "list-group-item">Profile: ${currentProfile.image}</li>
        </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
        <img src = "${currentProfile.image}">
    `;
    }else{

        window.location.reload();
    }
}



function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false}:{done: true}
        }
    };
}
