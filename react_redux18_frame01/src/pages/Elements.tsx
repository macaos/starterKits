import React from 'react';

const Elements = () => {
    return (

        <section className="page">

            {/* <!-- Standard Headings --> */}
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>

            {/* <!-- Base type size --> */}
            <p>The base type is 15px over 1.6 line height (24px)</p>

            {/* <!-- Other styled text tags --> */}
            <strong>Bolded</strong>
            <em>Italicized</em>
            <a>Colored</a>
            <u>Underlined</u>

            <div>
                <a className="button" href="#">Anchor button</a>
                <button>Button element</button>
                <input type="submit" value="submit input"></input>
                <input type="button" value="button input"></input>


                <a className="button button-primary" href="#">Anchor button</a>
                <button className="button-primary">Button element</button>
                <input className="button-primary" type="submit" value="submit input"></input>
                <input className="button-primary" type="button" value="button input"></input>


            </div>
            <form>
                <div className="row">
                    <div className="six columns">
                        <label htmlFor="exampleEmailInput">Your email</label>
                        <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"></input>
                    </div>
                    <div className="six columns">
                        <label htmlFor="exampleRecipientInput">Reason for contacting</label>
                        <select className="u-full-width" id="exampleRecipientInput">
                            <option value="Option 1">Questions</option>
                            <option value="Option 2">Admiration</option>
                            <option value="Option 3">Can I get your number?</option>
                        </select>
                    </div>
                </div>
                <label htmlFor="exampleMessage">Message</label>
                <textarea className="u-full-width" placeholder="Hey guys …" id="exampleMessage"></textarea>
                <label className="example-send-yourself-copy">
                    <input type="checkbox"></input>
                    <span className="label-body">Send a copy to yourself</span>
                </label>
                <input className="button-primary" type="submit" value="Submit"></input>
            </form>
            <ul>
                <li>Item 1</li>
                <li>
                    Item 2
                    <ul>
                        <li>Item 2.1</li>
                        <li>Item 2.2</li>
                    </ul>
                </li>
                <li>Item 3</li>
            </ul>
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dave Gamache</td>
                        <td>26</td>
                        <td>Male</td>
                        <td>San Francisco</td>
                    </tr>
                    <tr>
                        <td>Dwayne Johnson</td>
                        <td>42</td>
                        <td>Male</td>
                        <td>Hayward</td>
                    </tr>
                </tbody>
            </table>

            <button className="btn-block" onClick={() => {

            }}>다음</button>

        </section>

    );
};

export default Elements;