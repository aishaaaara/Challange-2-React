import React,{Component} from 'react';
import '../App.css';


class Beratbadan extends React.Component{
constructor(){
    super();
    this.state = {
        berat : null,
        tinggi : null,
        hasil : null,
        keterangan : ""
    };
}
//hitung
total = (e) => {
    e.preventDefault();
    const berat = parseInt(this.refs.berat.value);
    const tinggi = parseInt(this.refs.tinggi.value);
    let hasil;
    let keterangan;

    hasil = berat / Math.pow(tinggi,2);
    console.log(hasil);

    if(hasil < 18.5){
        keterangan = "Maaf Anda mengalami Kekurangan Berat Badan"
      }else if(hasil >= 18.5 && hasil <= 24.9){
        keterangan = "Selamat Berat Badan anda Ideal"
      }else if(hasil >= 25 && hasil <= 29.9){
        keterangan = "Maaf Anda mengalami Kelebihan berat badan"
      }else{
        keterangan = " Bahaya, Anda mengalami Obesitas"
      }
this.setState({
        tinggi,berat,hasil,keterangan
    });
  
}

render(){
    return(    
// Masukkan Nilai
<div className="bg">
    <div className="atas">
    <center><h4>Body Mass Index</h4></center>
    </div>
<form onSubmit={this.total} className="form">
    <div class="input-group">
    <div class="input-group-prepend">
    <span class="input-group-text">Berat (Kg)</span>
    <div class="col-sm-10">
    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" ref="berat"></input>
    </div>
    </div>
    </div>
                                               <p></p>
    <div class="input-group">
    <div class="input-group-prepend">
    <span class="input-group-text">Tinggi (Cm)</span>
    <div className="col-sm-10">
    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" ref="tinggi"></input>
    </div>
    </div>
    </div>
    <p></p>
    <button className="button">Hitung</button>
    <p></p>
    <div class="alert alert-info" role="alert">
    <h5><label>Keterangan :</label></h5>
    <h5>{this.state.keterangan}</h5>
    <p></p>
    </div>
</form>
</div>
   
    
);
}
}


export default Beratbadan;