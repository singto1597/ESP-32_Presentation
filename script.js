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
        "Overview": "ESP32 คือไมโครคอนโทรลเลอร์ที่มี Wi-Fi และ Bluetooth ในตัว สามารถใช้กับ IoT และ Embedded Systems ได้หลากหลาย",
        "Features": "ESP32 มี Dual-Core CPU, Wi-Fi, Bluetooth, ADC, DAC และ GPIOs ที่รองรับการใช้งานที่หลากหลาย",
        "Projects": "โปรเจคยอดนิยมที่ใช้ ESP32 เช่น Smart Home, IoT Sensors, Home Automation และ Robotics",
        "Code": "ตัวอย่างโค้ดเบื้องต้นของ ESP32 เช่น การเชื่อมต่อ Wi-Fi, การอ่านค่า Sensor และการส่งข้อมูลผ่าน MQTT",
        "Applications": "ESP32 ถูกใช้ใน Smart Devices, Industry Automation, Health Monitoring และ IoT Networks",
        "Future": "อนาคตของ ESP32 และ IoT จะพัฒนาไปสู่ AIoT (AI + IoT) และ Edge Computing",
    };

    return topics[topic] || "No information available for this topic.";
}
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}
