(function () {

if (window.__PremiumSupportLoaded) return;
window.__PremiumSupportLoaded = true;

function initWidget() {

if (document.getElementById("premium-support-widget")) return;

const config = window.SupportWidgetConfig || {};

const style = document.createElement("style");
style.textContent = `
#premium-support-widget,
#premium-support-widget *{
box-sizing:border-box;
font-family:Inter,Arial,sans-serif;
}

#premium-launcher{
position:fixed;
right:0;
top:50%;
transform:translateY(-50%);
width:58px;
height:180px;
background:linear-gradient(180deg,#111,#222);
border-radius:17px 0 0 17px;
cursor:pointer;
z-index:999999;
display:flex;
align-items:center;
justify-content:center;
box-shadow:-10px 15px 40px rgba(0,0,0,.2);
transition:.3s;
}

#premium-launcher:hover{
width:65px;
}

#premium-launcher span{
writing-mode:vertical-rl;
transform:rotate(180deg);
font-size:12px;
font-weight:700;
letter-spacing:2px;
color:#fff;
}

#premium-chat{
position:fixed;
right:75px;
top:50%;
transform:translateY(-50%);
width:420px;
height:720px;
background:#fff;
border-radius:26px;
overflow:hidden;
display:none;
z-index:999999;
border:1px solid #e5e7eb;
box-shadow:0 25px 80px rgba(0,0,0,.18);
}

#premium-header{
height:82px;
padding:16px;
display:flex;
align-items:center;
justify-content:space-between;
border-bottom:1px solid #eee;
background:#fff;
}

.premium-user{
display:flex;
align-items:center;
gap:12px;
}

.premium-avatar{
width:48px;
height:48px;
border-radius:50%;
background:#f3f4f6;
display:flex;
align-items:center;
justify-content:center;
}

.premium-avatar svg{
width:24px;
height:24px;
}

.premium-title{
font-size:15px;
font-weight:700;
color:#111;
}

.premium-status{
font-size:12px;
display:flex;
align-items:center;
gap:6px;
color:#666;
}

.premium-dot{
width:8px;
height:8px;
background:#10b981;
border-radius:50%;
}

#premium-close{
width:36px;
height:36px;
background:#f5f5f5;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
}

#premium-close:hover{
background:#eee;
}

#premium-messages{
height:560px;
overflow-y:auto;
padding:18px;
background:#fafafa;
}

.p-msg{
display:flex;
margin-bottom:14px;
}

.p-bot{
justify-content:flex-start;
}

.p-user{
justify-content:flex-end;
}

.p-bubble{
max-width:82%;
padding:14px 16px;
border-radius:18px;
font-size:14px;
line-height:1.6;
word-break:break-word;
}

.p-bot .p-bubble{
background:#fff;
border:1px solid #e5e7eb;
}

.p-user .p-bubble{
background:#111;
color:#fff;
}

#premium-footer{
position: fixed;
bottom:0;
padding:12px;
background:#fff;
width: 100%;
border-top:1px solid #eee;
}

#premium-input-wrap{
display:flex;
gap:8px;
}

#premium-input{
flex:1;
height:50px;
border:1px solid #ddd;
border-radius:14px;
padding:0 14px;
outline:none;
}

#premium-send{
width:50px;
height:50px;
border:none;
background:#111;
color:#fff;
border-radius:14px;
cursor:pointer;
font-size:18px;
justify-content: center;
}

.p-btn{
width:100%;
padding:13px;
margin-top:10px;
background:#111;
color:#fff;
border:none;
border-radius:14px;
cursor:pointer;
font-weight:600;
}

.p-btn:hover{
opacity:.9;
}

.typing{
display:flex;
gap:4px;
padding-top:4px;
}

.typing span{
width:7px;
height:7px;
background:#888;
border-radius:50%;
animation:typing 1.2s infinite;
}

.typing span:nth-child(2){
animation-delay:.2s;
}

.typing span:nth-child(3){
animation-delay:.4s;
}

@keyframes typing{
50%{
transform:translateY(-4px);
}
}

@media(max-width:768px){

#premium-launcher{
transform:none;
width:44px;
height:127px;
}

#premium-launcher span{
writing-mode:sideways-lr;
transform:none;
font-size:11px;
}

#premium-chat{
top:0;
right:0;
width:100%;
height:100%;
transform:none;
border-radius:0;
}

#premium-messages{
height:calc(100vh - 150px);
}
}

.typing-indicator{
display:flex;
align-items:center;
gap:4px;
padding:6px 0;
}

.typing-indicator span{
width:8px;
height:8px;
border-radius:50%;
background:#999;
animation:typingBounce 1.2s infinite ease-in-out;
}

.typing-indicator span:nth-child(2){
animation-delay:.2s;
}

.typing-indicator span:nth-child(3){
animation-delay:.4s;
}

@keyframes typingBounce{
0%,80%,100%{
transform:translateY(0);
opacity:.4;
}
40%{
transform:translateY(-6px);
opacity:1;
}
}
.order-card{
background:#fff;
border:1px solid #e5e7eb;
border-radius:16px;
padding:14px;
width:100%;
max-width:100%;
}

.order-top{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:12px;
}

.order-id{
font-size:15px;
font-weight:700;
color:#111827;
}

.order-date{
font-size:12px;
color:#6b7280;
margin-top:2px;
}

.order-status{
padding:6px 10px;
border-radius:999px;
font-size:11px;
font-weight:600;
}

.order-status.shipped{
background:#dcfce7;
color:#15803d;
}

.order-track{
background:#f8fafc;
border-radius:10px;
padding:10px;
font-size:13px;
margin-bottom:10px;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
}

.order-btn{
width:100%;
height:42px;
border:none;
border-radius:12px;
background:#111827;
color:#fff;
font-weight:600;
cursor:pointer;
align-content: center;
  text-align: center;
}

.premium-order-card{
background:#fff;
border-radius:18px;
padding:16px;
width:100%;
}

.premium-order-header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
}

.premium-order-id{
font-size:16px;
font-weight:700;
}

.premium-order-date{
font-size:12px;
color:#6b7280;
margin-top:4px;
}

.premium-order-badge{
padding:6px 12px;
border-radius:999px;
font-size:12px;
font-weight:600;
}

.shipped{
background:#dcfce7;
color:#15803d;
}

.premium-timeline{
position:relative;
padding-left:18px;
}

.timeline-item{
position:relative;
padding-bottom:22px;
}

.timeline-item:last-child{
padding-bottom:0;
}

.timeline-item::before{
content:'';
position:absolute;
left:-10px;
top:18px;
width:2px;
height:100%;
background:#e5e7eb;
}

.timeline-item:last-child::before{
display:none;
}

.timeline-dot{
width:14px;
height:14px;
border-radius:50%;
background:#d1d5db;
position:absolute;
left:-16px;
top:3px;
}

.completed .timeline-dot{
background:#10b981;
}

.active .timeline-dot{
background:#3b82f6;
box-shadow:0 0 0 6px rgba(59,130,246,.15);
}

.timeline-title{
font-size:14px;
font-weight:600;
}

.timeline-date{
font-size:12px;
color:#6b7280;
margin-top:3px;
}

#premium-support-widget .p-btn{
    justify-content: center;
    width:100% !important;
    padding:13px !important;
    margin-top:10px !important;
    background:#111 !important;
    color:#fff !important;
    border:none !important;
    border-radius:14px !important;
    cursor:pointer !important;
    font-weight:600 !important;
    appearance:none !important;
    -webkit-appearance:none !important;
}

#premium-support-widget #premium-send{
    background:#111 !important;
    color:#fff !important;
    border:none !important;
}

#premium-support-widget button,
#premium-support-widget a{
    text-decoration:none !important;
}

`;

document.head.appendChild(style);

const wrapper = document.createElement("div");
wrapper.id = "premium-support-widget";

wrapper.innerHTML = `
<div id="premium-launcher">
<span>
TRACK ORDER</span>
</div>

<div id="premium-chat">

<div id="premium-header">

<div class="premium-user">

<div class="premium-avatar">
<svg viewBox="0 0 24 24" fill="none">
<path d="M4 13V12C4 7.6 7.6 4 12 4s8 3.6 8 8v1"
stroke="#111"
stroke-width="2"/>
<rect x="3" y="12" width="4" height="7" rx="2"
stroke="#111"
stroke-width="2"/>
<rect x="17" y="12" width="4" height="7" rx="2"
stroke="#111"
stroke-width="2"/>
</svg>
</div>

<div>
<div class="premium-title">
${config.title || "1B Premium Support"}
</div>

<div class="premium-status">
<span class="premium-dot"></span>
${config.subtitle || "Online Now"}
</div>
</div>

</div>

<div id="premium-close">✕</div>

</div>

<div id="premium-messages"></div>

<div id="premium-footer">

<div id="premium-input-wrap">
<input id="premium-input" placeholder="Order ID or Phone Number">
<button id="premium-send">➜</button>
</div>

</div>

</div>
`;

document.body.appendChild(wrapper);

const launcher = document.getElementById("premium-launcher");
const chat = document.getElementById("premium-chat");
const closeBtn = document.getElementById("premium-close");
const messages = document.getElementById("premium-messages");
const input = document.getElementById("premium-input");
const sendBtn = document.getElementById("premium-send");

launcher.onclick = function () {
chat.style.display = "block";
launcher.style.display = "none";
};

closeBtn.onclick = function () {
chat.style.display = "none";
launcher.style.display = "flex";
};

async function trackOrder(text){

const response = await fetch(
    "/api/track-order",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            text:text
        })
    }
);

const result = await response.json();

if(!result.data.length){
    addMessage(
        "p-bot",
        "❌ Order not found"
    );
    return;
}

let ordersHtml = '';
const orders = result.data;

orders.forEach(order => {
// const order = result.data[0];

const product = order.products?.[0];
let timelineHtml = "";


if(product){
    const timeline = product.tracking_details || [];

    timeline.forEach((item, index) => {
    const isActive = index === timeline.length - 1;
    timelineHtml += `
        <div style="position:relative;${index < timeline.length-1 ? 'margin-bottom:16px;' : ''}">
        <div style="position:absolute;left:-16px;top:3px;width:10px;height:10px;border-radius:50%;
            background:${isActive ? '#3b82f6' : '#10b981'};
            ${isActive ? 'box-shadow:0 0 0 4px rgba(59,130,246,.15);' : ''}"></div>
        <p style="font-size:13px;font-weight:600;color:#111;margin:0 0 2px;">${item.strAction}</p>
        <p style="font-size:11px;color:#9ca3af;margin:0;">${item.strOrigin} · ${item.strActionTime}</p>
        </div>
    `;
    });
addMessage("p-bot", `
<div style="background:var(--color-background-primary,#fff);border:0.5px solid #e5e7eb;border-radius:20px;overflow:hidden;width:100%;">

  <!-- Header -->
  <div style="padding:16px 16px 12px;border-bottom:1px solid #f3f4f6;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
      <div>
        <p style="font-size:10px;color:#9ca3af;margin:0 0 3px;letter-spacing:.5px;text-transform:uppercase;">Order</p>
        <p style="font-size:15px;font-weight:600;color:#111;margin:0;">${order.order_code}</p>
      </div>
      <span style="background:#dcfce7;color:#166534;font-size:10px;font-weight:600;padding:4px 10px;border-radius:999px;margin-top:2px;">
        ${product.status.replace('STATUS_ID_','')}
      </span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      <div style="background:#f9fafb;border-radius:10px;padding:8px 10px;">
        <p style="font-size:10px;color:#9ca3af;margin:0 0 2px;">Expected delivery</p>
        <p style="font-size:12px;font-weight:600;color:#111;margin:0;">${product.delivery_date_desc ?? 'Not Available' }</p>
      </div>
      <div style="background:#f9fafb;border-radius:10px;padding:8px 10px;">
        <p style="font-size:10px;color:#9ca3af;margin:0 0 2px;">Payment</p>
        <p style="font-size:12px;font-weight:600;color:#111;margin:0;">${order.payment_method}</p>
      </div>
    </div>
  </div>

  <!-- Shipment -->
  <div style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">
    <p style="font-size:10px;color:#9ca3af;margin:0 0 8px;letter-spacing:.5px;text-transform:uppercase;">Shipment</p>
    <div style="display:flex;gap:8px;margin-bottom:6px;">
      <div style="width:30px;height:30px;border-radius:8px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;flex-shrink:0;">🚚</div>
      <div>
        <p style="font-size:10px;color:#9ca3af;margin:0 0 1px;">Courier</p>
        <p style="font-size:12px;font-weight:600;color:#111;margin:0;">${product.delivery_code ?? 'Not Available'}</p>
      </div>
    </div>
    <div style="display:flex;gap:8px;">
      <div style="width:30px;height:30px;border-radius:8px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;flex-shrink:0;">📦</div>
      <div>
        <p style="font-size:10px;color:#9ca3af;margin:0 0 1px;">Tracking ID</p>
        <p style="font-size:12px;font-weight:600;color:#111;margin:0;word-break:break-all;">${product.tracking_id ?? 'Not Available'}</p>
      </div>
    </div>
  </div>

  <!-- Timeline -->
  <div style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">
    <p style="font-size:10px;color:#9ca3af;margin:0 0 12px;letter-spacing:.5px;text-transform:uppercase;">Tracking</p>
    <div style="position:relative;padding-left:20px;">
      <div style="position:absolute;left:5px;top:12px;bottom:0;width:1px;background:#e5e7eb;"></div>
      ${timelineHtml}
    </div>
  </div>

  <!-- Totals -->
  <div style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">
    <div style="display:flex;justify-content:space-between;font-size:12px;color:#6b7280;margin-bottom:4px;"><span>Subtotal</span><span>₹${order.sub_total}</span></div>
    <div style="display:flex;justify-content:space-between;font-size:12px;color:#6b7280;margin-bottom:6px;"><span>Shipping</span><span>₹${order.shipping}</span></div>
    <div style="display:flex;justify-content:space-between;font-size:14px;font-weight:600;color:#111;"><span>Total</span><span>₹${order.total}</span></div>
  </div>

  <!-- Address -->
  <div style="padding:10px 16px;display:flex;gap:6px;align-items:flex-start;">
    <span style="color:#9ca3af;font-size:13px;flex-shrink:0;">📍</span>
    <p style="font-size:11px;color:#6b7280;margin:0;">${order.address}, ${order.city}, ${order.state} ${order.zip}</p>
  </div>

</div>
`);
}

});

}

function showTyping(){

const id = "typing-" + Date.now();

messages.insertAdjacentHTML(
"beforeend",
`
<div class="p-msg p-bot" id="${id}">
<div class="p-bubble">
<div class="typing-indicator">
<span></span>
<span></span>
<span></span>
</div>
</div>
</div>
`
);

messages.scrollTop = messages.scrollHeight;

return id;
}

function hideTyping(id){

const el = document.getElementById(id);

if(el){
el.remove();
}

}

function normalizeText(text){

    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s]/g,'')
        .replace(/(.)\1{2,}/g,'$1') // hiiii -> hi
        .replace(/\s+/g,' ');
}

function handleKeyword(message){
  const config = window.SupportWidgetConfig || {};
//   const textX = message.toLowerCase().trim();
  const text = normalizeText(message);

  const intents = {

    greeting: [
        'hi',
        'hii',
        'hy',
        'hey',
        'hello',
        'helo',
        'hola',
        'greetings',
        'good morning',
        'good afternoon',
        'good evening',
        'morning',
        'evening',
        'afternoon',
        'how are you',
        'who are you',
        'what can you do',
        'help',
        'support',
        'problem',
        'issue', 'error',
        'not working',
        'need help',
        'talk to human',
        'customer care',
        'contact support',
        'help',
        'hlp me',
        'i have a question',
        'can you assist me',
        'i need assistance',
        'i want to talk to a human',
        'representative',
        'agent',
        'customer service',
    ],

    tracking: [
        'track',
        'tracking',
        'order',
        'status',
        'shipment',
        'shipping'
    ],

    whatsapp: [
        'whatsapp',
        'share number',
        'support number',
        'contact number',
        'customer care',
        'phone number'
    ]

    };

  const keywords = {
    hello: "👋 Hello! How can we assist you today?",
    hi: "👋 Hi there! How can we help you today?",
    hey: "👋 Hey! Welcome to our support center.",

    "how are you": "😊 I'm doing great. How can I help you today?",
    "who are you": "🤖 I'm your support assistant. I can help with orders, tracking, refunds and more.",

    order: "📦 Please enter your Order ID or Phone Number.",
    track: "🚚 Please enter your Order ID or Phone Number.",
    tracking: "🚚 Please enter your Order ID or Phone Number.",
    status: "📋 Please enter your Order ID or Phone Number.",
    shipment: "📦 Please enter your Order ID or Phone Number.",
    shipping: "🚚 Please enter your Order ID or Phone Number.",

    phone: "📱 Please enter the phone number used when placing the order.",
    number: "📱 Please enter your Order ID or Phone Number.",
    mobile: "📱 Please enter your Order ID or Phone Number.",

    "share number": `📞 WhatsApp Support: ${config.whatsapp || "We will connect you soon"}`,
    "support number": `📞 WhatsApp Support: ${config.whatsapp || "We will connect you soon"}`,
    "contact number": `📞 WhatsApp Support: ${config.whatsapp || "We will connect you soon"}`,
    "phone number": `📞 WhatsApp Support: ${config.whatsapp || "We will connect you soon"}`,
    "customer care": `📞 Customer Care: ${config.whatsapp || "We will connect you soon"}`,
    "call me": `📞 Please contact our support team on WhatsApp: ${config.whatsapp || "We will connect you soon"}`,

    whatsapp: `💬 WhatsApp Support: ${config.whatsapp || "We will connect you soon"}`,
    "whatsapp number": `💬 WhatsApp Support: ${config.whatsapp || "We will connect you soon"}`,
    "whatsapp support": `💬 WhatsApp Support: ${config.whatsapp || "We will connect you soon"}`,
    "chat support": `💬 WhatsApp Support: ${config.whatsapp || "We will connect you soon"}`,

    refund: "💰 Please enter your Order ID to check refund status.",
    "refund status": "💰 Please enter your Order ID to check refund status.",
    money: "💰 Please enter your Order ID to check refund status.",
    "money back": "💰 Please enter your Order ID to check refund status.",

    cancel: "❌ Please enter your Order ID for cancellation assistance.",
    cancellation: "❌ Please enter your Order ID for cancellation assistance.",

    return: "📦 Please enter your Order ID for return assistance.",
    returns: "📦 Please enter your Order ID for return assistance.",

    exchange: "🔄 Please enter your Order ID for exchange assistance.",
    replace: "🔄 Please enter your Order ID for replacement assistance.",
    replacement: "🔄 Please enter your Order ID for replacement assistance.",

    payment: "💳 Please enter your Order ID for payment details.",
    paid: "💳 Please enter your Order ID for payment details.",
    transaction: "💳 Please enter your Order ID for payment details.",

    delivery: "🚚 Please enter your Order ID or Phone Number.",
    delivered: "🚚 Please enter your Order ID or Phone Number.",
    courier: "🚚 Please enter your Order ID or Phone Number.",

    late: "⏳ Please enter your Order ID so we can check delivery status.",
    delay: "⏳ Please enter your Order ID so we can check delivery status.",

    problem: "🛠️ Please describe your issue or enter your Order ID.",
    issue: "🛠️ Please describe your issue or enter your Order ID.",
    help: "🙋 How can we assist you today?",

    thank: "🙏 You're welcome. Happy to help!",
    thanks: "🙏 You're welcome. Happy to help!",
    "thank you": "🙏 You're welcome. Happy to help!",

    bye: "👋 Thank you for contacting us. Have a great day!",
    goodbye: "👋 Thank you for contacting us. Have a great day!",

    "not received": "📦 Please enter your Order ID to check delivery status.",
    "where is my order": "📦 Please enter your Order ID to track your order.",
    "my order": "📦 Please enter your Order ID or Phone Number.",
    "check order": "📦 Please enter your Order ID or Phone Number.",

    "order not delivered": "🚚 Please enter your Order ID so we can check delivery status.",
    "order delayed": "🚚 Please enter your Order ID so we can check delivery status.",

    "wrong product": "📦 Please enter your Order ID for replacement assistance.",
    "damaged product": "📦 Please enter your Order ID for replacement assistance.",
    "received damaged item": "📦 Please enter your Order ID for replacement assistance."
    };

    

    if(
    intents.greeting.some(
            word => text.includes(word)
        )
    ){
        addMessage(
            "p-bot",
            "👋 Hello! How can we assist you today?"
        );
        return true;
    }

    const greetingsRegex =  /^(hi+|hy+|hey+|hello+|helo+|hlo+)$/i;

        if(greetingsRegex.test(text)){

            addMessage(
                "p-bot",
                "👋 Hello! How can we assist you today?"
            );

            return true;
        }

    for (const key in keywords) {

    if (
        text === key ||
        text.includes(key) ||
        key.includes(text)
    ) {

        addMessage("p-bot", keywords[key]);
        return true;
    }
    }

    return false;

}

function addMessage(type, html) {
messages.insertAdjacentHTML(
"beforeend",
`<div class="p-msg ${type}">
<div class="p-bubble">${html}</div>
</div>`
);
messages.scrollTop = messages.scrollHeight;
}

function welcome() {

addMessage("p-bot", `
<b>👋 Welcome</b><br><br>
How can we assist you today?

<button class="p-btn" id="track-btn">
Track My Order
</button>

<button class="p-btn" id="whatsapp-btn">
WhatsApp Support
</button>
`);

setTimeout(function(){

const trackBtn = document.getElementById("track-btn");
const whatsappBtn = document.getElementById("whatsapp-btn");

if(trackBtn){
trackBtn.onclick = function(){
addMessage(
"p-bot",
"Please enter your Order ID or Phone Number."
);
};
}

if(whatsappBtn){
if(!config.whatsapp){
    whatsappBtn.style.display = "none";
}
whatsappBtn.onclick = function(){
window.open(
"https://wa.me/" +
(config.whatsapp || "919999999999"),
"_blank"
);
};
}

},100);
}

function searchOrder() {

const value = input.value.trim();

if(!value) return;

addMessage("p-user", value);

input.value = "";

if(handleKeyword(value)){
    return;
}



const typingId = showTyping();

trackOrder(value)
.then(()=>{
    hideTyping(typingId);
})
.catch((error)=>{
    hideTyping(typingId);

    console.error("Error fetching order details", error);
    addMessage(
        "p-bot",
        "❌ Unable to fetch order details"
    );
});

// setTimeout(function(){

// messages.lastElementChild.remove();

// addMessage("p-bot", `
// <div class="order-card">

// <div class="order-top">
// <div>
// <div class="order-id">#12456</div>
// <div class="order-date">04 Jun 2026</div>
// </div>

// <div class="order-status shipped">
// Shipped
// </div>
// </div>

// <div class="order-track">
// 📦 TRK123456
// </div>

// <a class="order-btn">
//     View Invoice →
// </a>


// <div class="premium-order-card">

// <div class="premium-order-header">

// <div>
// <div class="premium-order-id">
// #12456
// </div>

// <div class="premium-order-date">
// 04 Jun 2026
// </div>
// </div>

// <div class="premium-order-badge shipped">
// Shipped
// </div>

// </div>

// <div class="premium-timeline">

// <div class="timeline-item completed">

// <div class="timeline-dot"></div>

// <div class="timeline-content">
// <div class="timeline-title">
// Order Placed
// </div>

// <div class="timeline-date">
// 04 Jun 2026 10:30 AM
// </div>
// </div>

// </div>

// <div class="timeline-item completed">

// <div class="timeline-dot"></div>

// <div class="timeline-content">
// <div class="timeline-title">
// Packed
// </div>

// <div class="timeline-date">
// 04 Jun 2026 12:30 PM
// </div>
// </div>

// </div>

// <div class="timeline-item active">

// <div class="timeline-dot"></div>

// <div class="timeline-content">
// <div class="timeline-title">
// Shipped
// </div>

// <div class="timeline-date">
// 05 Jun 2026 09:00 AM
// </div>
// </div>

// </div>

// </div>

// </div>

// </div>
// `);

// },1500);
}

sendBtn.addEventListener("click", searchOrder);

input.addEventListener("keypress", function(e){
if(e.key === "Enter"){
searchOrder();
}
});

welcome();
}
if(document.readyState === "loading"){
document.addEventListener("DOMContentLoaded", initWidget);
}else{
initWidget();
}

})();