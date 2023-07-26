import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <React.Fragment>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Contacts</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/themes/v3/pages/examples/index3.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Contacts</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card card-solid">
            <div className="card-body pb-0">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      Digital Strategist
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>Nicole Pearson</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>About: </b> Web Designer / UX / Graphic Artist /
                            Coffee Lover{" "}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-building" />
                              </span>
                              Address: Demo Street 123, Demo City 04312, NJ
                            </li>
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              Phone #: + 800 - 12 12 23 52
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 text-center">
                          <img
                            src="../../dist/img/user1-128x128.jpg"
                            alt="user-avatar"
                            className="img-circle img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm bg-teal"
                        >
                          <i className="fas fa-comments" />
                        </Link>
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      Digital Strategist
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>Nicole Pearson</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>About: </b> Web Designer / UX / Graphic Artist /
                            Coffee Lover{" "}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-building" />
                              </span>{" "}
                              Address: Demo Street 123, Demo City 04312, NJ
                            </li>
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              Phone /: + 800 - 12 12 23 52
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 text-center">
                          <img
                            src="../../dist/img/user2-160x160.jpg"
                            alt="user-avatar"
                            className="img-circle img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm bg-teal"
                        >
                          <i className="fas fa-comments" />
                        </Link>
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      Digital Strategist
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>Nicole Pearson</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>About: </b> Web Designer / UX / Graphic Artist /
                            Coffee Lover{" "}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-building" />
                              </span>{" "}
                              Address: Demo Street 123, Demo City 04312, NJ
                            </li>
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              Phone /: + 800 - 12 12 23 52
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 text-center">
                          <img
                            src="../../dist/img/user1-128x128.jpg"
                            alt="user-avatar"
                            className="img-circle img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm bg-teal"
                        >
                          <i className="fas fa-comments" />
                        </Link>
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      Digital Strategist
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>Nicole Pearson</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>About: </b> Web Designer / UX / Graphic Artist /
                            Coffee Lover{" "}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-building" />
                              </span>{" "}
                              Address: Demo Street 123, Demo City 04312, NJ
                            </li>
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              Phone /: + 800 - 12 12 23 52
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 text-center">
                          <img
                            src="../../dist/img/user2-160x160.jpg"
                            alt="user-avatar"
                            className="img-circle img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm bg-teal"
                        >
                          <i className="fas fa-comments" />
                        </Link>
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      Digital Strategist
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>Nicole Pearson</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>About: </b> Web Designer / UX / Graphic Artist /
                            Coffee Lover{" "}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              Phone /: + 800 - 12 12 23 52
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 text-center">
                          <img
                            src="../../dist/img/user1-128x128.jpg"
                            alt="user-avatar"
                            className="img-circle img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm bg-teal"
                        >
                          <i className="fas fa-comments" />
                        </Link>
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      Digital Strategist
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>Nicole Pearson</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>About: </b> Web Designer / UX / Graphic Artist /
                            Coffee Lover{" "}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-building" />
                              </span>{" "}
                              Address: Demo Street 123, Demo City 04312, NJ
                            </li>
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              Phone /: + 800 - 12 12 23 52
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 text-center">
                          <img
                            src="../../dist/img/user1-128x128.jpg"
                            alt="user-avatar"
                            className="img-circle img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm bg-teal"
                        >
                          <i className="fas fa-comments" />
                        </Link>
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      Digital Strategist
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>Nicole Pearson</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>About: </b> Web Designer / UX / Graphic Artist /
                            Coffee Lover{" "}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-building" />
                              </span>{" "}
                              Address: Demo Street 123, Demo City 04312, NJ
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 text-center">
                          <img
                            src="../../dist/img/user1-128x128.jpg"
                            alt="user-avatar"
                            className="img-circle img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm bg-teal"
                        >
                          <i className="fas fa-comments" />
                        </Link>
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      Digital Strategist
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>Nicole Pearson</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>About: </b> Web Designer / UX / Graphic Artist /
                            Coffee Lover{" "}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-building" />
                              </span>{" "}
                              Address: Demo Street 123, Demo City 04312, NJ
                            </li>
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              Phone /: + 800 - 12 12 23 52
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 text-center">
                          <img
                            src="../../dist/img/user1-128x128.jpg"
                            alt="user-avatar"
                            className="img-circle img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm bg-teal"
                        >
                          <i className="fas fa-comments" />
                        </Link>
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      Digital Strategist
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>Nicole Pearson</b>
                          </h2>
                          <p className="text-muted text-sm">
                            <b>About: </b> Web Designer / UX / Graphic Artist /
                            Coffee Lover{" "}
                          </p>
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-building" />
                              </span>{" "}
                              Address: Demo Street 123, Demo City 04312, NJ
                            </li>
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              Phone #: + 800 - 12 12 23 52
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 text-center">
                          <img
                            src="../../dist/img/user2-160x160.jpg"
                            alt="user-avatar"
                            className="img-circle img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm bg-teal"
                        >
                          <i className="fas fa-comments" />
                        </Link>
                        <Link
                          to="/themes/v3/pages/examples/contacts.html"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <nav aria-label="Contacts Page Navigation">
                <ul className="pagination justify-content-center m-0">
                  <li className="page-item active">
                    <a
                      className="page-link"
                      href="/themes/v3/pages/examples/contacts.html"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="/themes/v3/pages/examples/contacts.html"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="/themes/v3/pages/examples/contacts.html"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="/themes/v3/pages/examples/contacts.html"
                    >
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="/themes/v3/pages/examples/contacts.html"
                    >
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="/themes/v3/pages/examples/contacts.html"
                    >
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="/themes/v3/pages/examples/contacts.html"
                    >
                      7
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="/themes/v3/pages/examples/contacts.html"
                    >
                      8
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Contact;
