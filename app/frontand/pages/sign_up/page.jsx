import "../stylePages/style.css"


export default function Sign_up(){
    return(
        <div dir="rtl" style={{
            backgroundColor:"#F8FAFC",
            width:"100%",
            height:"100vh",
        }}>

<div style={{
    width:"40%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    margin:"auto",
    marginTop:"80px",
    padding:"50px",
    borderRadius:"10px",
    backgroundColor:"#fff",
    boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.1)",
    height:"80%"




}}>


<h1>انشاء مستخدم جديد</h1>

<form>

<label>اسم المستخدم</label>
<br/>
    <input/>
<br/>

    <label>البريد الالكتروني</label>
<br/>

    <input/>
<br/>

    <label>كلمة المرور</label>
<br/>

    <input/>
<br/>

    <label>تأكيد كلمة المرور</label>
<br/>

    <input/>
<br/>
<div className="bt"><button>تسجيل</button></div>
    

</form>
</div>
        </div>
    )
}