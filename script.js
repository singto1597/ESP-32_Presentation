// เมื่อโหลด topic.html ให้เปลี่ยนเนื้อหาอัตโนมัติ
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic");

    if (topic) {
        document.getElementById("topic-title").innerText = topic;
        document.getElementById("topic-description").innerText =
            getTopicDescription(topic);
    }
});

// ฟังก์ชันคืนค่าข้อมูลหัวข้อ
function getTopicDescription(topic) {
    const topics = {
        "Overview": "รอใส่ข้อมูลเพิ่มเติม",
        "Features": "รอใส่ข้อมูลเพิ่มเติม",
        "Projects": "รอใส่ข้อมูลเพิ่มเติม",
        "Code": "รอใส่ข้อมูลเพิ่มเติม",
        "Applications": "รอใส่ข้อมูลเพิ่มเติม",
        "Future": "รอใส่ข้อมูลเพิ่มเติม",
    };

    return topics[topic] || "No information available for this topic.";
}
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}
