
const SUPABASE_URL = "https://qtmtcgzdioazupcouisl.supabase.co";
const SUPABASE_REST_URL = `${SUPABASE_URL}/rest/v1/customer_inquiries`;
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_NamWUy1TFkr-j9Ef8LJdcQ_7gNl_UUi";

function toggleMenu(){
  const x=document.getElementById('mobileLinks');
  if(x) x.classList.toggle('show');
}

async function saveInquiry(data){
  const response = await fetch(SUPABASE_REST_URL, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_PUBLISHABLE_KEY,
      "Authorization": `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify(data)
  });
  if(!response.ok){
    const errorText = await response.text();
    throw new Error(errorText || "Database request failed");
  }
}

async function sendWhatsApp(e){
  e.preventDefault();
  const n=document.getElementById('name').value.trim();
  const p=document.getElementById('phone').value.trim();
  const em=document.getElementById('email').value.trim();
  const m=document.getElementById('message').value.trim();

  const button=e.submitter;
  if(button){button.disabled=true; button.textContent="Saving...";}

  try{
    await saveInquiry({
      name:n,
      phone:p,
      email:em || null,
      message:m
    });
  }catch(error){
    console.error("Supabase error:", error);
    alert("Your message could not be saved online. Please contact us directly on WhatsApp.");
    if(button){button.disabled=false; button.textContent="Send Message on WhatsApp";}
    return;
  }

  const text=`Hello AHJ Agency!%0AName: ${encodeURIComponent(n)}%0APhone: ${encodeURIComponent(p)}%0AEmail: ${encodeURIComponent(em)}%0AMessage: ${encodeURIComponent(m)}`;
  window.open(`https://wa.me/923154740696?text=${text}`,'_blank');
  if(button){button.disabled=false; button.textContent="Send Message on WhatsApp";}
}
