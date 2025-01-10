async function Githubloader(){
    const response = await fetch('https://api.github.com/users/ANKITKUMARBARIK')
    return response.json()
} 

export default Githubloader