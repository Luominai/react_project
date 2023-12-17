import "./ClassGuide.css"
import { useState } from "react";

function ClassGuide() {
   return (
      <>
         <h3>Classes</h3>
         <p>A class is the blueprint from which objects are made.</p>
         <p>Constructors initialize data members of the class. Multiple constructors per class are fine as long as they have different parameter lists. The constructors need to have either a different number of parameters, different order of parameter types, or different parameter types.</p>
         <p>Default constructors don't take input from the user. Instead, data members are set to be default values.</p>
         <p>Destructors destroy an object when it's no longer needed. We've typically used this to release dynamically allocated memory and set the corresponding pointers to be null.</p>
         <p>Both constructors and destructors have <b>no return type</b>.</p>
         <p><u>Setters:</u> changes the value of data members</p>
         <p><u>Getters:</u> returns the value of data members</p>

         
         <h4>Inheritance</h4>
         <p><u>Subclass:</u> class that is derived from another class.</p>
         <p><u>Superclass:</u> class from which subclass is derived.</p>
         <p>A subclass inherits all the <i>members</i> from its superclass</p>
         <p>This does <b>not</b> include constructors because constructors are not members. However, constructors of the superclass can be invoked from the subclass.</p>
         <p>Methods defined for objects of base class can be used by objects of subclasses</p>

         <h4>Code Example</h4>
         <pre><code>
            class Person &#123;<br></br>   public:<br></br>      Person();<br></br>      Person(std::string name);<br></br>      void setAge(int age);<br></br>      std::string getName() const;<br></br>      virtual std::string toString() const;<br></br>   private: <br></br>      std::string name;<br></br>      int age;<br></br>
               &#125;;
         </code></pre>
         <p>In this example, <code>Person();</code> and <code>Person(std::string name);</code> are both constructors of the Person class. <code>setAge(int age)</code> is a setter and <code>std::string getName() const</code> is a getter.</p>
         <p>If a destructor became needed for this class, it would be formatted like this: <code>~Person();</code></p>
         <p>To demonstrate inheritance, consider Doctor class as a subclass of Person class:</p>
         <pre><code>
            class Doctor : public Person &#123;<br></br>   public:<br></br>      Doctor();<br></br>      bool takeInsurance(std::string insurance) const;<br></br>      virtual std::string toString() const;<br></br>   private: <br></br>      std::vector&#60;std::string&#62; insurances;<br></br>
               &#125;;
         </code></pre>
         <p>Because Doctor is a subclass of Person, it can use the methods defined for Person, such as <code>getName()</code>.</p>
         <p>Note that the <code>virtual</code> keyword in the <code>toString()</code> method for both Doctor and Person class signals that Doctor is overriding the method.</p>
         <p>The constructor <code>Doctor();</code> is needed though because subclasses don't inherit constructors from the base class. However, when defining the <code>Doctor();</code> constructor, the <code>Person();</code> constructor can be called to initialize the data members that Doctor inherited from Person.</p>
         <p>For example,</p>
         <pre><code>
         Doctor::Doctor() : Person()<br></br>&#123;<br></br>   //initialize Doctor code<br></br>&#125;
         </code></pre>
      </>
   )
}

export default ClassGuide