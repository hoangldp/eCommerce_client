import Link from 'next/link';

const Nav = () => {
    return (
        <div className="az-sidebar">
            <div className="az-sidebar-header">
                <a href="../template/index.html" className="az-logo">az<span>i</span>a</a>
            </div>
            <div className="az-sidebar-loggedin">
                <div className="az-img-user online"><img src="https://via.placeholder.com/500x500" alt="" /></div>
                <div className="media-body">
                    <h6>Aziana Pechon</h6>
                    <span>Premium Member</span>
                </div>
            </div>
            <div className="az-sidebar-body">
                <ul className="nav">
                    <li className="nav-label">Main Menu</li>
                    <li className="nav-item active show">
                        <a href="" className="nav-link with-sub"><i className="typcn typcn-clipboard"></i>Dashboard</a>
                        <nav className="nav-sub">
                            <Link href="/"><a className="nav-sub-link">Home</a></Link>
                            <Link href="/about"><a className="nav-sub-link">About</a></Link>
                            <Link href="/cookie"><a className="nav-sub-link">Cookie</a></Link>
                            <Link href="/post"><a className="nav-sub-link">Post</a></Link>
                            <Link href="/user"><a className="nav-sub-link">User</a></Link>
                            <a href="dashboard-one.html" className="nav-sub-link">Web Analytics</a>
                            <a href="dashboard-two.html" className="nav-sub-link active">Sales Monitoring</a>
                            <a href="dashboard-three.html" className="nav-sub-link">Ad Campaign</a>
                            <a href="dashboard-four.html" className="nav-sub-link">Event Management</a>
                            <a href="dashboard-five.html" className="nav-sub-link">Helpdesk Management</a>
                            <a href="dashboard-six.html" className="nav-sub-link">Finance Monitoring</a>
                            <a href="dashboard-seven.html" className="nav-sub-link">Cryptocurrency</a>
                            <a href="dashboard-eight.html" className="nav-sub-link">Executive / SaaS</a>
                            <a href="dashboard-nine.html" className="nav-sub-link">Campaign Monitoring</a>
                            <a href="dashboard-ten.html" className="nav-sub-link">Product Management</a>
                        </nav>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link with-sub"><i
                            className="typcn typcn-document"></i>Apps &amp; Pages</a>
                        <nav className="nav-sub">
                            <a href="app-mail.html" className="nav-sub-link">Mailbox</a>
                            <a href="app-chat.html" className="nav-sub-link">Chat</a>
                            <a href="app-calendar.html" className="nav-sub-link">Calendar</a>
                            <a href="app-contacts.html" className="nav-sub-link">Contacts</a>
                            <a href="page-profile.html" className="nav-sub-link">Profile</a>
                            <a href="page-invoice.html" className="nav-sub-link">Invoice</a>
                            <a href="page-signin.html" className="nav-sub-link">Sign In</a>
                            <a href="page-signup.html" className="nav-sub-link">Sign Up</a>
                            <a href="page-404.html" className="nav-sub-link">Page 404</a>
                        </nav>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
