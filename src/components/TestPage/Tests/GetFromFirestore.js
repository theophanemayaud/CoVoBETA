import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "rmwc/Button";

class GetFromFirestore extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  componentDidMount = () => {
    console.log("GetFromFirestore did mount");
    const { firestore } = this.context.store;
    firestore.setListeners([
      { collection: "tests" },
      {
        collection: "tests",
        where: [
          ["name.first", "==", "Kim"],
          ["name.last.perso_rating.mother", ">", 5],
          ["name.last.perso_rating.mother", "<=", 92]
        ],
        storeAs: "tquerys"
      }
    ]);
  };
  componentWillUnmount = () => {
    console.log("GetFromFirestore will unmount");
    const { firestore } = this.context.store;
    firestore.unsetListeners([
      { collection: "tests" },
      {
        collection: "tests",
        where: [
          ["name.first", "==", "Kim"],
          ["name.last.perso_rating.mother", ">", 5],
          ["name.last.perso_rating.mother", "<=", 92]
        ],
        storeAs: "tquerys"
      }
    ]);
  };

  render() {
    console.log("In GetFromFirestore render");
    console.log(this.props);

    const { firestore } = this.context.store;
    const CovoTripsShown = (firestore) => {
      if (typeof this.props.tests !== "undefined") {
        return (
          <div id="get-from-firestore">
            <hr />
            {this.props.tests.map((test, index) => (
              <div key={test.id}>
                <div>
                  Test {index + 1} Id : {JSON.stringify(test.id)}
                </div>
                <div>
                  First name :
                  {JSON.stringify(test.name.first)}
                </div>
                <div>
                  Last name from father:
                  {JSON.stringify(test.name.last.father)} at perso rating :
                  {JSON.stringify(test.name.last.perso_rating.father)}
                  <br />
                  Last name from mother:
                  {JSON.stringify(test.name.last.mother)} at perso rating :
                  {JSON.stringify(test.name.last.perso_rating.mother)}
                  <br />
                </div>
                <hr />
              </div>
            ))}
          </div>
        );
      } else {
        return <div>Well there, load those trips away boy !!! </div>;
      }
    };
    return (
      <div>
        <Button raised onClick={() => console.log(this.props)}>
          Log Props
        </Button>
        <Button
          raised
          onClick={() => {
            console.log("Unsetting listener for tests data");
            firestore.unsetListener({ collection: "tests" });
          }}
        >
          Unset tests listener
        </Button>
        <Button
          raised
          onClick={() => {
            console.log("Setting listener for tests data");
            firestore.setListener({
              collection: "tests",
              oneListenerPerPath: true
            });
          }}
        >
          Set tests listener
        </Button>
        <hr />
        <div>Tests data</div>
        <CovoTripsShown firestore={firestore} />

        <hr />
        <hr />

        <div>
          <div>Query data</div>
          {(() => {
            if (typeof this.props.tquerys !== "undefined") {
              return (
                <div id="query-from-firestore">
                  <hr />
                  {this.props.tquerys.map((tquery, index) => (
                    <div key={tquery.id}>
                      <div>
                        Test {index + 1} Id : {JSON.stringify(tquery.id)}
                      </div>
                      <div>
                        First name :
                        {JSON.stringify(tquery.name.first)}
                      </div>
                      <div>
                        Last name from father:
                        {JSON.stringify(tquery.name.last.father)} at perso
                        rating :
                        {JSON.stringify(tquery.name.last.perso_rating.father)}
                        <br />
                        Last name from mother:
                        {JSON.stringify(tquery.name.last.mother)} at perso
                        rating :
                        {JSON.stringify(tquery.name.last.perso_rating.mother)}
                        <br />
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              );
            } else {
              return <div>Well there, load those trips away boy !!! </div>;
            }
          })()}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  firestore: state.firestore,
  tests: state.firestore.ordered.tests,
  tquerys: state.firestore.ordered.tquerys
}))(GetFromFirestore);
