import './style.css'
const Dashboard = () => {
  return <>
        <header className="db__header">
            <div className="container">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <a className="open_nav__btn navbar__toggle"><i className="bi bi-list"></i></a>
                    <a href="index.html" className='me-2 d-flex d-lg-none'>
                        <img src="assets/images/logo.png" alt="logo" className="logo" />
                    </a>
                    <form action="" method="post" className='db__search'>
                        <input className='form-control' type="text" name="search" placeholder="ابحث هنا" />
                        <button type="submit" className="btn">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                    <div className='d-flex align-items-center db__navbar'>
                        <div className="dropdown notifications">
                            <button className="btn p-0 p-md-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-bell-fill position-relative">
                                    <span
                                        className="position-absolute translate-middle badge rounded-pill border border-light bg-danger"
                                        >
                                        9
                                        <span className="visually-hidden"></span>
                                        </span>
                                </i>
                            </button>
                            <div className="dropdown-menu">
                                <div className="drop-heading">
                                    <div className="d-flex">
                                        <a href='#' className='text-white'><i className="bi bi-box-arrow-up-right"></i> الإشعارات
                                        </a>
                                    </div>
                                </div>
                                <div className="drop-body">
                                    <a className="dropdown-item d-flex justify-content-start align-items-center"
                                        href="notify-list.html">
                                        <div className="ms-3">
                                            <i className="bi bi-1-circle-fill fs-1"></i>
                                        </div>
                                        <div className="mt-1">
                                            <h5 className="notification-label mb-1">
                                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                                            </h5>
                                            <span className="text-dark opacity-50" >قبل 30
                                                دقيقة</span>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex justify-content-start align-items-center"
                                        href="notify-list.html">
                                        <div className="ms-3">
                                            <i className="bi bi-2-circle-fill fs-1"></i>
                                        </div>
                                        <div className="mt-1">
                                            <h5 className="notification-label mb-1">
                                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                                            </h5>
                                            <span className="text-dark opacity-50" >قبل 30
                                                دقيقة</span>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex justify-content-start align-items-center"
                                        href="notify-list.html">
                                        <div className="ms-3">
                                            <i className="bi bi-3-circle-fill fs-1"></i>
                                        </div>
                                        <div className="mt-1">
                                            <h5 className="notification-label mb-1">
                                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                                            </h5>
                                            <span className="text-dark opacity-50" >قبل 30
                                                دقيقة</span>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex justify-content-start align-items-center"
                                        href="notify-list.html">
                                        <div className="ms-3">
                                            <i className="bi bi-4-circle-fill fs-1"></i>
                                        </div>
                                        <div className="mt-1">
                                            <h5 className="notification-label mb-1">
                                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                                            </h5>
                                            <span className="text-dark opacity-50" >قبل 30
                                                دقيقة</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown p-0 user__avatar">
                            <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-caret-down-fill d-none d-md-flex"></i>
                                <h6 className='d-none d-md-flex'>Mohamed ALnawjha</h6>
                                    <span className='position-relative'>
                                        <img className="rounded-circle mx-2" width='37px' src="assets/images/user.jpg" alt="" />
                                        <span
                                            className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle"
                                            >
                                            <span className="visually-hidden">متصل</span>
                                        </span>
                                    </span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="profile.html"><i className="bi bi-person-bounding-box"></i>
                                        الملف
                                        الشخصي</a></li>
                                <li><a className="dropdown-item" href="settings.html"><i className="bi bi-gear-fill"></i>
                                        الإعدادات</a>
                                </li>
                                <li><a className="dropdown-item" href="logout.html"><i className="bi bi-box-arrow-right"></i> تسجيل
                                        الخروج</a>
                                </li>
                            </ul>
                        </div>
        
                    </div>
                    <a className='d-none' href="index.html">
                        <img src="assets/images/logo.png" alt="logo" className="logo" />
                    </a>
                </div>
            </div>
        </header>
        <aside className='db__sidebar'>
            <div className="sidebar__header">
                <div className="d-block d-lg-none p-3">
                    <a className="close_nav__btn navbar__toggle justify-content-end"><i className="bi bi-x-lg fs-3"></i></a>
                </div>
                <a href="index.html" className='d-none d-lg-block'>
                    <img src="assets/images/logo.png" alt="logo" className="logo" />
                </a>
                <form action="" method="post" className='db__search d-flex d-lg-none'>
                    <input className='form-control bg-white' type="text" name="search" placeholder="ابحث هنا" />
                    <button type="submit" className="btn">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </div>
            <div className='sidebar__content'>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="index.html" className="nav-link active d-flex justify-content-between align-items-center"
                            aria-current="page">
                            <span>
                                <i className="bi bi-house-fill"></i>
                                الرئيسية
                            </span>
                        </a>
                    </li>
                    <li className="nav-item sub__items sub__1">
                        <a className="nav-link d-flex justify-content-between align-items-center" aria-current="page"
                            href="#">
                            <span>
                                <i className="bi bi-bookmark-star-fill"></i>
                                معاملتي
                                <span className="badge bg-secondary rounded-1 p-1 mx-2 fs-6 fw-normal">4</span>
                            </span>
                            <i className="m-0 fs-6 arrow__sub bi bi-chevron-left"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="all-orders.html">
                                    جميع المعاملات
                                </a>
                            </li>
                            <li>
                                <a href="add-order-st1.html">
                                    قدم لمعاملة جديدة +
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="messages.html" className="nav-link d-flex justify-content-between align-items-center"
                            aria-current="page">
                            <span>
                                <i className="bi bi-chat-left-text-fill"></i>
                                مراسلاتي
                                <span className="badge bg-secondary rounded-1 p-1 mx-2 fs-6 fw-normal">4</span>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-flex justify-content-between align-items-center" aria-current="page"
                            href="tasks.html">
                            <span>
                                <i className="bi bi-list-task"></i>
                                مهامي
                                <span className="badge bg-secondary rounded-1 p-1 mx-2 fs-6 fw-normal">4</span>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="invoices.html">
                            <i className="bi bi-currency-dollar"></i>
                            المدفوعات
                        </a>
                    </li>
                    <li className="nav-item sub__items sub__2">
                        <a className="nav-link d-flex justify-content-between align-items-center" aria-current="page" href="#">
                            <span>
                                <i className="bi bi-gear-fill"></i>
                                الإعدادات
                            </span>
                            <i className="m-0 fs-6 arrow__sub bi bi-chevron-left"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    الملف الشخصي
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    تعديل الإعدادات
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    بيانات الدفع
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>

    <main className='db-content'>
        <div className="container">
            <div className="d-block d-lg-flex justify-content-between align-items-center  content__header">
                <div className='d-block'>
                    <h1 className="page-title lh-base"><i className="bi bi-chat-heart-fill"></i>
                        <span className='text-dark'>مرحبا بك</span>
                        خلفان البوسعيدي!
                    </h1>
                    <ol className="breadcrumb me-4">
                        <li className="breadcrumb-item"><a href="#">الرئيسية</a></li>
                    </ol>
                </div>
                <a href="add-order-st1.html" className="btn btn__serv fs-6 h-25 m-4">قدم معاملة جديدة<i
                        className="bi bi-arrow-left-circle me-2"></i></a>
            </div>
            <div className="row py-4">
                <div className="col-md-12 col-lg-8 mb-4 m-lg-0">
                    <div className="card border-0 rounded-3 shadow-sm">
                        <div
                            className="card-header rounded-3 border-0 d-flex justify-content-between align-items-center bg-white">
                            <h6 className='fs-5 fw-bold text-black p-2'>التحديثات الأخيرة</h6>
                            <i className="bi bi-three-dots fs-5 text-black"></i>
                        </div>
                        <div className="card-body px-0 px-md-1">
                            <ul className="list-group p-0 last__update" data-aos="zoom-in">
                                <li
                                    className="list-group-item border-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                    <span>
                                        <i className="bi bi-check-circle-fill ms-3"></i>
                                        تم رفع الملفات المطلوبة لمعاملة رقم ٢٣٤#
                                    </span>
                                    <span className="text-dark opacity-50 me-5 mt-3 m-md-0" >قبل
                                        30
                                        دقيقة</span>
                                </li>
                                <li
                                    className="list-group-item border-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                    <span>
                                        <i className="bi bi-check-circle-fill ms-3"></i>
                                        تم رفع الملفات المطلوبة لمعاملة رقم ٢٣٤#
                                    </span>
                                    <span className="text-dark opacity-50 me-5 mt-3 m-md-0" >قبل
                                        30
                                        دقيقة</span>
                                </li>
                                <li
                                    className="list-group-item border-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                    <span>
                                        <i className="bi bi-check-circle-fill ms-3"></i>
                                        تم رفع الملفات المطلوبة لمعاملة رقم ٢٣٤#
                                    </span>
                                    <span className="text-dark opacity-50 me-5 mt-3 m-md-0" >قبل
                                        30
                                        دقيقة</span>
                                </li>
                                <li
                                    className="list-group-item border-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                    <span>
                                        <i className="bi bi-check-circle-fill ms-3"></i>
                                        تم رفع الملفات المطلوبة لمعاملة رقم ٢٣٤#
                                    </span>
                                    <span className="text-dark opacity-50 me-5 mt-3 m-md-0" >قبل
                                        30
                                        دقيقة</span>
                                </li>
                                <li
                                    className="list-group-item border-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                    <span>
                                        <i className="bi bi-check-circle-fill ms-3"></i>
                                        تم رفع الملفات المطلوبة لمعاملة رقم ٢٣٤#
                                    </span>
                                    <span className="text-dark opacity-50 me-5 mt-3 m-md-0" >قبل
                                        30
                                        دقيقة</span>
                                </li>
                                <li
                                    className="list-group-item border-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                    <span>
                                        <i className="bi bi-check-circle-fill ms-3"></i>
                                        تم رفع الملفات المطلوبة لمعاملة رقم ٢٣٤#
                                    </span>
                                    <span className="text-dark opacity-50 me-5 mt-3 m-md-0" >قبل
                                        30
                                        دقيقة</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="card border-0 rounded-3 shadow-sm">
                        <div
                            className="card-header rounded-3 border-0 d-flex justify-content-between align-items-center bg-white">
                            <h6 className='fs-5 fw-bold text-black p-2'>إجمالي المعاملات</h6>
                            <i className="bi bi-three-dots fs-5 text-black"></i>
                        </div>
                        <div className="card-body text-center">
                            <canvas id='chart__index' data-aos="zoom-in"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12  pt-3 pb-5">
                    <div className="card border-0 rounded-3 p-2 shadow-sm">
                        <div
                            className="card-header rounded-3 border-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center bg-white">
                            <h6 className='fs-5 fw-bold text-black'>المعاملات</h6>
                            <form className="search__hero" action="">
                                <div className="input__box px-3 py-1">
                                    <input type="text" placeholder="ابحث عن الخدمة" />
                                    <button className='btn bg-transparent border-0 p-1 mt-0' type="submit"><i
                                            className='bi bi-search'></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive" data-aos="fade-down">
                                <table
                                    className="table border text-nowrap text-md-nowrap table-striped mb-0 text-center border-0">
                                    <thead>
                                        <tr>
                                            <th className='text-dark'>رقم المعاملة</th>
                                            <th className='text-dark'>اسم المعاملة</th>
                                            <th className='text-dark'>تاريخ الإنشاء</th>
                                            <th className='text-dark'>الحالة</th>
                                            <th className='text-dark'>إجراء</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#5255</td>
                                            <td>إنشاء سجل تجاري جديد</td>
                                            <td>2024/04/20</td>
                                            <td>
                                                <span className="badge rounded-pill badge-lg fw-normal px-3 py-2"
                                                    >قيد
                                                    الإنشاء</span>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-eye-fill"></i></a>
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-pencil-fill"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#5255</td>
                                            <td>إنشاء سجل تجاري جديد</td>
                                            <td>2024/04/20</td>
                                            <td>
                                                <span className="badge rounded-pill badge-lg fw-normal px-3 py-2"
                                                    >مكتمل</span>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-eye-fill"></i></a>
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-pencil-fill"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#5255</td>
                                            <td>إنشاء سجل تجاري جديد</td>
                                            <td>2024/04/20</td>
                                            <td>
                                                <span className="badge rounded-pill badge-lg fw-normal px-3 py-2"
                                                    >تم الرفض</span>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-eye-fill"></i></a>
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-pencil-fill"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#5255</td>
                                            <td>إنشاء سجل تجاري جديد</td>
                                            <td>2024/04/20</td>
                                            <td>
                                                <span className="badge rounded-pill badge-lg fw-normal px-3 py-2"
                                                    >متابعة</span>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-eye-fill"></i></a>
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-pencil-fill"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#5255</td>
                                            <td>إنشاء سجل تجاري جديد</td>
                                            <td>2024/04/20</td>
                                            <td>
                                                <span className="badge rounded-pill badge-lg fw-normal px-3 py-2"
                                                    >قيد
                                                    الإنشاء</span>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-eye-fill"></i></a>
                                                    <a className="btn btn-icon rounded-circle p-0 d-flex justify-content-center align-items-center"
                                                        ><i
                                                            className="bi bi-pencil-fill"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 footer-contact">
                    <h4>معلومات التواصل</h4>
                    <ul>
                        <li><a href="#"><i className="bi bi-geo-alt-fill fs-5 text-success"></i> بناية جراند مول</a>
                        </li>
                        <li><a href="#"><i className="bi bi-envelope-at-fill fs-5 text-success"></i> email@gmail.com</a>
                        </li>
                        <li><a href="#"><i className="bi bi-telephone-fill fs-5 text-success"></i> ٥٥٥٤٧٢٩٦٨+ </a></li>
                    </ul>

                </div>
                <div className="col-12 col-md-6 col-lg-3 footer-links">
                    <h4>روابط سريعة</h4>
                    <ul>
                        <li><a href="#">الخدمات</a></li>
                        <li><a href="#">النشرة الالكترونية</a></li>
                        <li><a href="#">سياسة الموقع</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3 footer-links">
                    <h4>عن المنصة</h4>
                    <ul>
                        <li><a href="#">من نحن</a></li>
                        <li><a href="#">القوانين والتعاميم</a></li>
                        <li><a href="#">خارطة الموقع</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <h4>مواقع التواصل الإجتماعي</h4>
                    <div className="social-links d-flex justify-content-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="row mt-4 pt-3 border-top opacity-75">
                <div className="col-12 text-start">
                    <p className='text-white'>
                        &copy; Copyright <strong><span>معاملة للخدمات والمعاملات</span></strong>. All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
  </>;
};

export default Dashboard;
