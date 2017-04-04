package org.deepak.java8.functional;
interface SimpleInterface {
  public void doSomeWork();
  //A default method in the interface created using "default" keyword
  default public void doSomeOtherWork(){
    System.out.println("DoSomeOtherWork implementation in the interface");
  }
}

public class JavaDefaultMethod implements SimpleInterface{
  @Override
  public void doSomeWork() {
    System.out.println("Do Some Work implementation in the class");
  }
  public static void main(String[] args){
    System.out.println("Hello java");
    JavaDefaultMethod javaDefaultMethod = new JavaDefaultMethod();
    javaDefaultMethod.doSomeWork();
    javaDefaultMethod.doSomeOtherWork();
    //ITrade iTrade = (Trade t) -> t.getStatus().equals("New");
    ITrade iTrade =  (t) -> t.getStatus().equals("New");
    ITrade isBigTrader =  (t) -> t.getQuantity() >= 10000;
    ITrade isGoogleOldTrader =  (t) -> t.getName().equals("Google") && t.getStatus().equals("Old");
    
  }
}
