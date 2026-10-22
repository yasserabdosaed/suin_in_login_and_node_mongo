import "../stylePages/style.css"

export default function Login(){
 
    return(
<>
<div dir="rtl" style={{
    backgroundColor:"#F8FAFC",
    width:"100%",
    height:"100vh",
}}>

<div style={{
    backgroundColor:"#FFFFFF",
    width:"30%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    margin:"40px auto auto auto",
    borderRadius:"10px",
    padding:"20px",
    boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.1)",
    height:"70%"


}}>
<h1 style={{
   fontWeight:"bold"
}}> صفحة تسجيل الدخول </h1>
<br/>
<div>
    <form>
        <label >اسم المستخدم</label>
        <br/>
        <input placeholder="اسم المستخدم" type="text" name="username" />
        <br/>
        <br/>
        <label >كلمة المرور</label>
        <br/>
        <input placeholder="كلمة المرور"  type="password" name="password" />
        <br/>
        <div className="bt">   <button >تسجيل الدخول</button></div>
     
    </form>
</div>
</div>
</div>

</>


    );
}