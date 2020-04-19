package com.mirea.informatics.stats;

public class Userdata {
    String email;
    String password;
    String status;

    public void setLogin(String email, String password){
        this.email = email;
        this.password = password;
    }

    public void sendLogin(){
        //TODO Отправка данных логина
    }

    public void sendReg(String email, String password, String group){
        //TODO Отправка данных регистрации
    }

    private void setStatus(String status){
        this.status = status;
    }

    public String getStatus(){
        return status;
    }
}
