const onlineEventBtn = document.querySelector(".online_event-btn");
const faceToFaceEventBtn = document.querySelector(".face-to-face_event-btn");
const onlineEvent = document.querySelector(".online_event");
const faceToFaceEvent = document.querySelector(".face-to-face_event");

faceToFaceEventBtn.addEventListener("click", (e)=>{
    onlineEventBtn.classList.remove("active");
    faceToFaceEventBtn.classList.add("active");
    faceToFaceEvent.style.display = "block"
    onlineEvent.style.display = "none";
})
onlineEventBtn.addEventListener("click", (e)=>{
    onlineEventBtn.classList.add("active");
    faceToFaceEventBtn.classList.remove("active");
    faceToFaceEvent.style.display = "none"
    onlineEvent.style.display = "block";
})