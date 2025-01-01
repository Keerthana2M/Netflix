function Profile(){
    return(
        <div>
            <h1>Profile card Challanges</h1>
            <ProfileCard
           name="Keerthana"
           age={20}
           greeting={
            <div>
                <strong>Hey Keerthana,Have wonderful Day</strong>
            </div>
           }
           >
        <p>Hobbies:Reading ,Travelling</p>
        <button>Conact</button>
        </ProfileCard>
        <ProfileCard
           name="Teju"
           age={16}
           greeting={
            <div>
                <strong>Hey Teju,Have a good Day</strong>
            </div>
           }
           >
        <p>Hobbies:Reading ,Hiking</p>
        <button>Conact</button>
        </ProfileCard>
        </div>
    )

}
export default Profile;

function ProfileCard(props){
    const {name,age,greeting,}= props;
    return(
    <>
        <h2>Name:{name}</h2>
        <p>Age:{age}</p>
        <p>{greeting}</p>
        <div>{props.children}</div>
    </>
    );
}