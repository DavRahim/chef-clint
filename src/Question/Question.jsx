import React from "react";

const Question = () => {
  return (
    <div className="max-sm:px-4 text-white bg-[#0c0c0c]">
      <h1 className="font-bold text-2xl mb-4">Question Answer</h1>
      {/* When should use Context API */}
      <div className="card w-full bg-[#0c0c0c] shadow-xl mt-4 py-4">
        <h1 className="text-center font-bold text-2xl mb-4">
          Q1. Difference Between Controlled and Uncontrolled Components..!
        </h1>
        <div className="card-body pt-3">
          <p>
            In React, a controlled component is a component that is controlled
            by React state, while an uncontrolled component is a component that
            maintains its own internal state. A controlled component receives
            its current value and an update callback via props, and the parent
            component manages the state of the component. When the user
            interacts with the component, the parent component updates the
            state, which in turn updates the component's value. An uncontrolled
            component, maintains its own internal state, and when the user
            interacts with the component, it updates its own state, which in
            turn updates the component's value.
          </p>
        </div>
      </div>
      {/* use state work */}
      <div className="card w-full bg-[#0c0c0c] shadow-xl mt-4 py-4">
        <h1 className="text-center font-bold text-2xl mb-4">
          Q2.How to validate React props using PropTypes.?
        </h1>
        <div className="card-body pt-3">
          <p>
            propTypes is used to verify the input type for props in react. If
            you try to put any other type, then it will give you warning in
            console. For example, if you set name should be string, but you pass
            something else like number then it will give you warning in console
            and also the result might get different. After you define patterns
            in for propTypes you should set default values for props as well.
          </p>
        </div>
      </div>
      {/* what is useref in react */}
      <div className="card w-full bg-[#0c0c0c] shadow-xl mt-4 py-4">
        <h1 className="text-center font-bold text-2xl mb-4">
          Q3. Tell us the difference between nodejs and express js..!
        </h1>
        <div className="card-body pt-3">
          <p>
            js web application framework that provides a robust set of features
            for web and mobile applications. In other words, NodeJS is the
            package, which provides the JavaScript run-time environment, whereas
            Express is a framework that sits on top of NodeJS and helps us to
            handle requests and responses.
          </p>
        </div>
      </div>
      {/* what is usememo  */}
      <div className="card w-full bg-[#0c0c0c] shadow-xl mt-4 py-4">
        <h1 className="text-center font-bold text-2xl mb-4">
          Q4. What is a custom hook, and why will you create a custom hook?
        </h1>
        <div className="card-body pt-3">
          <p>
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
