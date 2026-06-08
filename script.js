// ==========================================
// 1. نظام محاكي الجزيئات السيبرانية التفاعلية (Canvas Particles)
// ==========================================
const canvas = document.getElementById('cyberCanvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
const numberOfParticles = 65;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
    }
    draw() {
        ctx.fillStyle = 'rgba(0, 242, 254, 0.25)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
initParticles();
animateParticles();

// ==========================================
// 2. تأثير النص المشفر (Text Scramble Effect)
// ==========================================
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 30);
            const end = start + Math.floor(Math.random() * 30);
            this.queue.push({ from, to, start, end });
        }
        this.frame = 0;
        this.update();
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0; i < this.queue.length; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.chars[Math.floor(Math.random() * this.chars.length)];
                    this.queue[i].char = char;
                }
                output += `<span style="color:#00f2fe;">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete !== this.queue.length) {
            this.frameId = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('scramble-title');
    if(el) {
        const fx = new TextScramble(el);
        fx.setText('ZAID ISSAM HARDAN');
    }
});

// ==========================================
// 3. شات بوت ChatGPT العالمي الشامل الذكي (Omni General LLM Sim)
// ==========================================
function toggleChat() {
    document.getElementById('aiChatWidget').classList.toggle('active');
}

function handleChatKey(event) {
    if (event.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    const chatBody = document.getElementById('chatBody');

    // طباعة رسالة المستخدم
    const userDiv = document.createElement('div');
    userDiv.className = 'msg user-msg';
    userDiv.innerText = text;
    chatBody.appendChild(userDiv);
    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    // صندوق محاكاة التفكير والتحليل الدلالي لـ ChatGPT
    const thinkingDiv = document.createElement('div');
    thinkingDiv.className = 'thinking-box';
    thinkingDiv.innerHTML = `<i class="fas fa-microchip"></i> تفكير عميق وتحليل السياق المعرفي...`;
    chatBody.appendChild(thinkingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        thinkingDiv.remove();

        const aiDiv = document.createElement('div');
        aiDiv.className = 'msg ai-msg';
        
        const q = text.toLowerCase();
        let reply = "";

        // محاكي المعرفة العامة الموسع - يجاوب على أي شيء بالوجود
        if (q.includes('طبخ') || q.includes('اكل') || q.includes('وصفة')) {
            reply = "الطبخ هو علم بحد ذاته! يعتمد على موازنة النكهات (الحامض، المالح، الحلو، والمر). على سبيل المثال، إعداد الكبسة أو المنسف الأردني الأصيل يحتاج إلى ضبط دقيق للمقادير ودرجات حرارة هادئة ليتشبع الأرز بالنكهة المطلوبة. هل تبحث عن طريقة عمل أكله معينة؟";
        }
        else if (q.includes('فضاء') || q.includes('كواكب') || q.includes('مجرة') || q.includes('ثقب')) {
            reply = "الكون شاسع ومليء بالغموض! الثقوب السوداء (Black Holes) هي مناطق في الفضاء تتميز بجاذبية هائلة لدرجة أن الضوء نفسه لا يستطيع الهروب منها. مجرتنا 'درب التبانة' تحتوي على ملايين النجوم والكواكب، والبحث العلمي في 2026 مستمر لاستكشاف أعماق الكواكب الصالحة للحياة.";
        }
        else if (q.includes('فيزياء') || q.includes('رياضيات') || q.includes('معادلة')) {
            reply = "الفيزياء هي لغة الكون، والرياضيات هي الأداة لصياغتها! بدءاً من معادلة أينشتاين الشهيرة للطاقة والكتلة، وصولاً إلى ميكانيكا الكم التي تدرس الجسيمات دون الذرية، كلها علوم تقوم على حل المشكلات (Problem Solving) تماماً مثل الخوارزميات البرمجية.";
        }
        else if (q.includes('تاريخ') || q.includes('حضارة') || q.includes('قديم')) {
            reply = "التاريخ مرآة الحاضر. بدءاً من الحضارة السومرية والفراعنة، وصولاً إلى العصر الإسلامي الذي ازدهرت فيه العلوم والرياضيات على يد علماء مثل الخوارزمي (مؤسس الجبر والخوارزميات التي نبني بها الـ AI اليوم)؛ التاريخ يثبت أن العلم هو أساس نهضة الأمم.";
        }
        else if (q.includes('برمج') || q.includes('كود') || q.includes('لغة') || q.includes('تطوير')) {
            reply = "بصفتي خبير ذكاء اصطناعي، البرمجة هي بناء المعمار الرقمي. لغات مثل Java ممتازة لبناء الأنظمة الضخمة المستقرة (Enterprise)، بينما Python هي الملكة في مجالات تحليل البيانات والتعلم الآلي بفضل مكتباتها العملاقة. زيد حردان يدمج بينهما ببراعة في جامعة الزرقاء!";
        }
        else if (q.includes('زيد') || q.includes('zaid') || q.includes('من هو') || q.includes('صاحب الموقع')) {
            reply = "المهندس زيد عصام حردان هو طالب متميز في جامعة الزرقاء بتخصص تكنولوجيا المعلومات وهندسة البرمجيات (2024-2028). يمتلك شهادات دولية معتمدة من Cisco في علوم وتحليل البيانات باستخدام بايثون، وله بصمة واضحة في الأعمال اللوجستية والتطوعية مع منصة 'نحن'!";
        }
        else if (q.includes('سيسكو') || q.includes('cisco') || q.includes('شهادات')) {
            reply = "يمتلك المهندس زيد اعتمادات احترافية دولية صادرة عن أكاديمية Cisco في عام 2026، وهي: شهادة أساسيات علوم البيانات باستخدام بايثون (Data Science Essentials) وشهادة أساسيات تحليل البيانات (Data Analytics Essentials).";
        }
        else if (q.includes('تواصل') || q.includes('رقم') || q.includes('واتس')) {
            reply = "يمكنك فتح محادثة فورية ومباشرة مع المهندس زيد حردان عبر النقر على الأيقونة الخضراء العائمة أسفل الشاشة، أو عبر الاتصال الهاتفي المباشر بالرقم: 0781080893.";
        }
        else if (q.includes('مرحبا') || q.includes('الو') || q.includes('سلام')) {
            reply = "أهلاً بك! أنا محرك الذكاء الاصطناعي الشامل (ChatGPT Sim). أنا جاهز تماماً للإجابة على أي سؤال في الكون، سواء كان علمياً، تاريخياً، تقنياً، أو ترفيهياً. كيف يمكنني مساعدتك اليوم؟";
        }
        else {
            // رد ذكي عام مرن للغاية يحاكي ChatGPT تماماً لأي موضوع آخر بالدنيا
            reply = `لقد قمت بتحليل استفسارك العالي الأهمية: "${text}". كـ عقل اصطناعي شامل، أرى أن هذا الموضوع ينبثق من فضول معرفي مميز. هذا المفهوم يرتبط بالعلوم التحليلية المعاصرة وكيفية تنظيم الأفكار المعرفية. هل تود مني التعمق بشكل تفصيلي في هذا الجانب، أو تحليله هندسياً من منظور تكنولوجيا المعلومات؟ أنا في الخدمة فوراً!`;
        }

        aiDiv.innerHTML = reply.replace(/\n/g, '<br>');
        chatBody.appendChild(aiDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1200);
}

// ==========================================
// 4. تأثير التحرك ثلاثي الأبعاد للكروت (3D Parallax Tilt Effect)
// ==========================================
document.querySelectorAll('.glass-panel').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width/2);
        const y = e.clientY - rect.top - (rect.height/2);
        
        // تدوير طفيف لإعطاء حركة ثلاثية الأبعاد تفاعلية
        card.style.transform = `perspective(1000px) rotateY(${x * 0.08}deg) rotateX(${-y * 0.08}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)`;
    });
});

// ==========================================
// 5. نظام تتبع السكرول النشط للقائمة العلوية
// ==========================================
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});