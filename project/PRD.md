# Geeta University SmartFee Portal - Product Requirements Document (PRD)

## 1. Project Overview

SmartFee Portal is a comprehensive university fee management system designed to digitize the complete fee payment lifecycle for Geeta University. The platform enables students to pay semester fees, track dues, and download receipts online, while providing the accounts department with a centralized dashboard to monitor fee collection, identify defaulters, and generate financial reports.

The system handles multiple fee heads (tuition, examination, hostel, bus, library), supports partial payments with automatic remaining dues carry-forward, and integrates with Razorpay for secure online transactions. Automated email reminders and instant PDF receipt generation ensure a seamless experience for all stakeholders.

---

## 2. Problem Statement

Currently, Geeta University students face significant challenges in fee management:

- **Manual processes**: Students must stand in long queues at the accounts office to pay tuition, hostel, and examination fees
- **Poor tracking**: Students struggle to monitor due dates, pending dues, and retrieve past payment receipts
- **Lack of automation**: No automated reminders for upcoming fee deadlines
- **Limited visibility**: Accounts department lacks real-time dashboards for fee collection monitoring and defaulter identification
- **Infrastructure gaps**: Students without internet access cannot pay fees digitally
- **Reporting challenges**: Department-wise financial reporting is manual and time-consuming

SmartFee Portal addresses these pain points through a secure, accessible, and automated online platform.

---

## 3. Goals and Objectives

### Primary Goals
1. **Digitize fee payment lifecycle**: Enable 100% online fee payment for all fee heads
2. **Improve user experience**: Reduce payment processing time from hours to under 2 minutes
3. **Enhance financial tracking**: Provide real-time fee dashboards for students and administrators
4. **Increase fee collection efficiency**: Reduce defaults through automated reminders and defaulter management
5. **Enable compliance**: Generate legal, verifiable PDF receipts with university branding
6. **Provide accessibility**: Support offline payment options for students without internet access

### Success Metrics
- 80% reduction in accounts office footfall within 3 months
- 90% student adoption within first semester
- 95% fee collection rate (up from current 75%)
- < 2 minutes average payment completion time
- Zero security incidents in first year of operation

---

## 4. Target Users

| User Type | Description | Key Needs |
|-----------|-------------|-----------|
| Students | Current university students (undergraduate and postgraduate) | View fee structure, make payments, download receipts, track dues, receive reminders |
| Accounts Department Staff | Finance officers managing fee collection | Monitor collections, manage fee structure, view defaulters, generate reports |
| HODs (Department Heads) | Academic department heads | View department-wise fee defaulter reports, track students in their department |
| Finance Controller / Registrar | Senior administration overseeing finances | Oversee all financial operations, approve scholarships, audit transactions |
| System Administrators | IT team managing the platform | User management, system configuration, security monitoring |

---

## 5. User Roles and Permissions

| Role | Permissions |
|------|-------------|
| **Student** | - Login with enrollment number + password<br>- View personal fee dashboard<br>- Make payments (up to payable amount)<br>- Download receipts<br>- View payment history<br>- Receive notifications<br>- Reset password via OTP |
| **Accounts Team** | - View dashboard analytics (collections, pending dues, daily transactions)<br>- Manage fee structure (create, edit, upload via CSV)<br>- View and manage defaulter list<br>- Send reminders to defaulters<br>- Generate financial reports<br>- View transaction logs<br>- Export reports |
| **HOD** | - View department-wise fee defaulter reports<br>- Filter students by branch/year/batch<br>- Access read-only dashboard for their department |
| **Finance Controller** | - All Accounts Team permissions<br>- Apply scholarship offsets<br>- Approve offline payments<br>- Audit transaction logs<br>- Generate university-wide financial reports |
| **System Admin** | - Manage user roles and permissions<br>- Monitor system health<br>- Configure system settings<br>- Access all data in read-only mode for troubleshooting |

---

## 6. Functional Requirements

### 6.1 Authentication Module

| ID | Requirement | Priority |
|----|-------------|----------|
| AUTH-01 | Students must log in using enrollment number and password | P0 |
| AUTH-02 | Password reset via OTP sent to registered email | P0 |
| AUTH-03 | JWT-based session management with auto-expiry (24 hours) | P0 |
| AUTH-04 | Role-based access control (RBAC) for all user types | P0 |
| AUTH-05 | Password hashing using bcrypt with salt rounds ≥ 10 | P0 |
| AUTH-06 | Rate limiting on login attempts (5 attempts per 15 minutes) | P0 |
| AUTH-07 | Session timeout after 30 minutes of inactivity | P1 |

### 6.2 Student Fee Dashboard

| ID | Requirement | Priority |
|----|-------------|----------|
| DASH-01 | Display semester-wise fee cards showing Total, Paid, Pending, Due Date | P0 |
| DASH-02 | Quick Pay CTA button prominently displayed | P0 |
| DASH-03 | Show pending dues broken down by fee head (Tuition, Exam, Hostel, Bus, Library) | P0 |
| DASH-04 | Display payment history table with Date, Fee Head, Amount, Transaction ID, Status | P0 |
| DASH-05 | Provide download receipt link for each successful transaction | P0 |
| DASH-06 | Show upcoming due dates with countdown (X days remaining) | P1 |
| DASH-07 | Display total number of pending payments | P0 |
| DASH-08 | Show semester-wise breakdown of fee components | P0 |

### 6.3 Online Payment Module

| ID | Requirement | Priority |
|----|-------------|----------|
| PAY-01 | Integrate Razorpay for online payments (UPI, Net Banking, Cards, Wallet) | P0 |
| PAY-02 | Support payment for multiple fee heads in a single transaction | P0 |
| PAY-03 | Allow students to select fee heads via checkboxes | P0 |
| PAY-04 | Display real-time amount summary before payment initiation | P0 |
| PAY-05 | Support partial payments with remaining dues carried forward automatically | P1 |
| PAY-06 | Handle Razorpay webhooks for payment status verification | P0 |
| PAY-07 | Prevent duplicate payments for the same fee head | P0 |
| PAY-08 | Support fee challan generation for offline bank payments | P1 |
| PAY-09 | Provide payment status tracking (initiated, success, failed, pending) | P0 |

### 6.4 Receipt Generation Module

| ID | Requirement | Priority |
|----|-------------|----------|
| REC-01 | Auto-generate PDF receipt on successful payment | P0 |
| REC-02 | Receipt must include: student name, enrollment number, fee head, amount, transaction ID, date, payment method | P0 |
| REC-03 | Receipt must display university letterhead and digital seal | P0 |
| REC-04 | Provide download option for all past receipts | P0 |
| REC-05 | Email receipt PDF to student automatically upon successful payment | P1 |
| REC-06 | Receipt must be verifiable via QR code (optional) | P2 |
| REC-07 | Generate offline challan in PDF format for students without internet | P1 |

### 6.5 Admin Accounts Dashboard

| ID | Requirement | Priority |
|----|-------------|----------|
| ADM-01 | Display total collection today (with comparison to yesterday) | P0 |
| ADM-02 | Display total collection this month (with trend chart) | P0 |
| ADM-03 | Show pending dues across all students (total amount) | P0 |
| ADM-04 | Display defaulter count (students with overdue payments) | P0 |
| ADM-05 | Show daily transaction summary | P0 |
| ADM-06 | Visualize collection data with Chart.js graphs | P0 |
| ADM-07 | Filter by date range, branch, year, batch | P1 |
| ADM-08 | Export reports as CSV/PDF | P1 |

### 6.6 Fee Structure Management

| ID | Requirement | Priority |
|----|-------------|----------|
| FEE-01 | Create fee structure with multiple fee heads per semester | P0 |
| FEE-02 | Define fee heads with: name, amount, due date, description | P0 |
| FEE-03 | Link fee structure to specific: branch, year, batch | P0 |
| FEE-04 | Support CSV batch upload for fee structure assignment | P1 |
| FEE-05 | Allow editing existing fee structures | P1 |
| FEE-06 | Support fee head deactivation/reactivation | P2 |
| FEE-07 | Validate duplicate entries in batch upload | P1 |
| FEE-08 | Provide preview before finalizing CSV upload | P2 |

### 6.7 Defaulter Management

| ID | Requirement | Priority |
|----|-------------|----------|
| DEF-01 | Auto-identify students with overdue payments (past due date) | P0 |
| DEF-02 | List defaulters with filters (branch, year, batch, amount range) | P0 |
| DEF-03 | Search/filter defaulters table | P0 |
| DEF-04 | Send reminder email to individual or bulk defaulters | P0 |
| DEF-05 | Track reminder history per student | P1 |
| DEF-06 | Allow marking defaulters as "contacted" manually | P2 |
| DEF-07 | Export defaulter list as CSV | P1 |

### 6.8 Scholarship Management

| ID | Requirement | Priority |
|----|-------------|----------|
| SCH-01 | Apply scholarship amount to reduce payable fee | P2 |
| SCH-02 | Link scholarship to specific student with amount and type | P2 |
| SCH-03 | Track scholarship approvals with approver details | P2 |
| SCH-04 | Auto-calculate remaining payable amount after scholarship offset | P2 |
| SCH-05 | Maintain scholarship history per student | P2 |

### 6.9 Notification System

| ID | Requirement | Priority |
|----|-------------|----------|
| NOT-01 | Send email reminders 7, 3, and 1 day before fee deadline | P1 |
| NOT-02 | In-app notification for upcoming due dates | P1 |
| NOT-03 | Send OTP for password reset via email | P0 |
| NOT-04 | Email receipt on successful payment | P1 |
| NOT-05 | Send payment failure notification | P1 |
| NOT-06 | Bulk email to defaulters | P0 |

### 6.10 HOD View

| ID | Requirement | Priority |
|----|-------------|----------|
| HOD-01 | View department-wise fee defaulter report | P2 |
| HOD-02 | Filter by branch and semester | P2 |
| HOD-03 | View student-wise payment history (read-only) | P2 |
| HOD-04 | Export department report as PDF | P2 |

### 6.11 Transaction Logging

| ID | Requirement | Priority |
|----|-------------|----------|
| LOG-01 | Complete payment log with Razorpay transaction IDs | P0 |
| LOG-02 | Filter logs by date, branch, fee head, payment status | P1 |
| LOG-03 | Search by student name or enrollment number | P1 |
| LOG-04 | Display transaction details including gateway response | P0 |
| LOG-05 | Maintain audit trail of all financial transactions | P0 |

---

## 7. Non-Functional Requirements

### 7.1 Security

| ID | Requirement | Priority |
|----|-------------|----------|
| SEC-01 | JWT-based stateless authentication with refresh token rotation | P0 |
| SEC-02 | Password hashing with bcrypt (salt rounds ≥ 10) | P0 |
| SEC-03 | HTTPS only in production with valid SSL certificates | P0 |
| SEC-04 | Input validation using class-validator with DTOs | P0 |
| SEC-05 | Rate limiting on all API endpoints (100 requests per minute) | P0 |
| SEC-06 | CORS configuration with whitelisted origins | P0 |
| SEC-07 | Helmet.js for security headers | P0 |
| SEC-08 | SQL injection prevention via Prisma ORM | P0 |
| SEC-09 | XSS protection through content security policies | P0 |
| SEC-10 | API request logging for security auditing | P1 |
| SEC-11 | CSRF token protection for payment endpoints | P1 |
| SEC-12 | GDPR compliance (right to data deletion, data portability) | P2 |

### 7.2 Performance

| ID | Requirement | Priority |
|----|-------------|----------|
| PERF-01 | API response < 500ms for 95% of requests | P0 |
| PERF-02 | Database indexes on frequently queried fields (enrollmentNo, email, status, dueDate) | P0 |
| PERF-03 | Lazy loading on frontend for large lists | P0 |
| PERF-04 | Caching strategy for fee structure data (Redis) | P1 |
| PERF-05 | Image and asset optimization on mobile app | P0 |
| PERF-06 | Database connection pooling (max 10 connections) | P1 |
| PERF-07 | Pagination for all list endpoints (20 items per page) | P0 |

### 7.3 Scalability

| ID | Requirement | Priority |
|----|-------------|----------|
| SCA-01 | Stateless backend deployable on multiple instances | P0 |
| SCA-02 | Database designed for horizontal scaling | P0 |
| SCA-03 | Use MongoDB Atlas for managed database scaling | P0 |
| SCA-04 | Support horizontal scaling of application servers via load balancer | P1 |
| SCA-05 | Asynchronous job processing for email notifications (BullMQ) | P1 |

### 7.4 Responsiveness and Accessibility

| ID | Requirement | Priority |
|----|-------------|----------|
| RES-01 | Mobile-first UI design for mobile app (Flutter) | P0 |
| RES-02 | Responsive web admin dashboard (Tailwind CSS) | P0 |
| RES-03 | Supported viewports: 320px to 1920px | P0 |
| RES-04 | WCAG 2.1 AA compliance for web interface | P1 |
| RES-05 | Semantic HTML and proper ARIA labels | P1 |
| RES-06 | Keyboard navigation support | P1 |
| RES-07 | Dark mode option (optional) | P2 |

### 7.5 Code Quality

| ID | Requirement | Priority |
|----|-------------|----------|
| COD-01 | ESLint + Prettier configured | P0 |
| COD-02 | GitHub branching strategy (main/dev/feature) | P0 |
| COD-03 | PR-based code reviews mandatory | P0 |
| COD-04 | Unit tests for critical APIs (Jest) | P1 |
| COD-05 | Integration tests for payment flows | P1 |
| COD-06 | Code coverage > 70% for core modules | P2 |

### 7.6 Documentation

| ID | Requirement | Priority |
|----|-------------|----------|
| DOC-01 | API documented with Swagger/OpenAPI | P0 |
| DOC-02 | README with setup instructions | P0 |
| DOC-03 | Inline code comments for complex logic | P1 |
| DOC-04 | ER diagram and architecture diagram | P0 |
| DOC-05 | Deployment documentation | P0 |

### 7.7 Testing

| ID | Requirement | Priority |
|----|-------------|----------|
| TST-01 | Unit tests for core business logic | P1 |
| TST-02 | Integration tests for API endpoints | P1 |
| TST-03 | E2E testing for critical flows (payment, login, receipt) | P1 |
| TST-04 | Postman collection for manual API testing | P0 |
| TST-05 | Test coverage for security scenarios | P1 |

---

## 8. User Stories

### Student User Stories

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| US-01 | As a student, I want to log in using my enrollment number and password so that I can access my fee dashboard | Login form validates credentials; JWT token generated on success; redirect to dashboard |
| US-02 | As a student, I want to view my fee dashboard with semester-wise cards showing total, paid, and pending amounts | Dashboard shows all semesters; cards display accurate totals; Quick Pay button visible |
| US-03 | As a student, I want to select multiple fee heads and make a single payment | Checkbox selection; real-time amount summary; Razorpay payment gateway opens |
| US-04 | As a student, I want to make partial payment and see remaining dues automatically updated | Payment amount validation; remaining dues calculation; balance carried forward |
| US-05 | As a student, I want to download PDF receipts for all my payments | Receipt PDF generated; downloadable from payment history; includes university branding |
| US-06 | As a student, I want to reset my password via OTP when I forget it | OTP sent to registered email; password reset form; email verification |
| US-07 | As a student, I want to receive email reminders for upcoming fee deadlines | Email sent 7, 3, and 1 day before due date; in-app notification also |
| US-08 | As a student, I want to generate an offline challan for bank payment | PDF challan generated; includes student details and barcode |

### Admin User Stories

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| US-09 | As an accounts officer, I want to view a dashboard showing total collection, pending dues, and defaulters | Dashboard loads with real-time stats; charts visualized; data filterable by date |
| US-10 | As an accounts officer, I want to upload fee structures via CSV for a batch | CSV validation; preview before upload; success/failure feedback; structure assigned to students |
| US-11 | As an accounts officer, I want to view a list of defaulters and send reminders | Defaulter table with filters; bulk reminder button; reminder tracking |
| US-12 | As an accounts officer, I want to view and filter transaction logs | Transaction table with filters; search by student name; export functionality |
| US-13 | As an accounts officer, I want to apply scholarship offset for eligible students | Scholarship form; amount validation; approval workflow; updated payable amount |
| US-14 | As a Finance Controller, I want to approve scholarship applications and view financial reports | Approval workflow; comprehensive financial reports; export options |

### HOD User Stories

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| US-15 | As an HOD, I want to view department-wise fee defaulter reports | Department filter; student details visible; read-only access |
| US-16 | As an HOD, I want to export reports for my department | PDF export; includes all required fields; university branding |

---

## 9. Use Cases

### Use Case 1: Student Pays Semester Fees Online

**Actors**: Student, Razorpay Gateway, System

**Preconditions**: 
- Student is registered and has valid enrollment credentials
- Fee structure for the semester has been published
- Student has internet access

**Flow**:
1. Student logs in with enrollment number and password
2. Student navigates to Fee Dashboard
3. System displays all semesters with Total, Paid, Pending amounts
4. Student clicks "Pay Now" on the current semester
5. Student selects fee heads to pay (Tuition, Exam, Hostel, etc.)
6. System displays total amount summary
7. Student clicks "Pay" and is redirected to Razorpay payment gateway
8. Student completes payment via UPI/Net Banking/Card/Wallet
9. Razorpay sends webhook with payment status
10. System verifies payment and updates student's fee record
11. System auto-generates PDF receipt with university letterhead
12. System sends receipt email to student
13. Student views updated dashboard with payment reflected

**Alternative Flow A** (Partial Payment):
- Student enters amount less than total due
- System validates partial payment
- Remaining dues are carried forward
- Dashboard updates showing pending amount

**Alternative Flow B** (Payment Failure):
- Razorpay returns payment failed status
- System logs failure reason
- Student notified via email
- Student can retry payment

### Use Case 2: Accounts Officer Uploads Fee Structure

**Actors**: Accounts Officer, System

**Preconditions**:
- Accounts officer is authenticated with proper role
- CSV template is prepared with correct format

**Flow**:
1. Accounts officer logs in to admin dashboard
2. Navigates to "Fee Structure Management"
3. Clicks "Upload CSV"
4. Selects CSV file from local system
5. System validates CSV format and data integrity
6. System shows preview of fee structure to be assigned
7. Accounts officer confirms upload
8. System processes and assigns fee structure to all students in the batch
9. System shows success message with count of affected students
10. System logs the upload activity

**Alternative Flow A** (Invalid CSV):
- System detects invalid format or missing fields
- Shows error message with specific validation issues
- User corrects CSV and re-uploads

---

## 10. System Architecture Overview

### 10.1 High-Level Architecture

```
┌──────────────────────────────────────────────────────────────────────────┐
│                            MOBILE APP (Flutter)                        │
│                                                                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │ Student     │  │ Fee         │  │ Payment     │  │ Receipt     │ │
│  │ Dashboard   │  │ Selection   │  │ Module      │  │ Module      │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘ │
└───────────────────────────────┬────────────────────────────────────────┘
                                │ HTTPS + JWT
                                ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                        API GATEWAY / LOAD BALANCER                     │
│                         (Nginx / AWS ELB)                             │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                     NESTJS BACKEND (Node.js)                           │
│                                                                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐  │
│  │ Auth     │ │ Fee      │ │ Payment  │ │ Admin    │ │ Notification│  │
│  │ Module   │ │ Module   │ │ Module   │ │ Module   │ │ Module     │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └────────────┘  │
│                                                                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐                 │
│  │ Student  │ │ Receipt  │ │ Reports  │ │ Webhook  │                 │
│  │ Module   │ │ Module   │ │ Module   │ │ Handler  │                 │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘                 │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                    PRISMA ORM (TypeScript)                             │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                    MONGODB ATLAS (NoSQL)                               │
│                                                                        │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐      │
│  │ Students   │  │ FeeStruc-  │  │ FeePayments│  │ Transaction│      │
│  │ Collection │  │ ture       │  │ Collection │  │ Collection │      │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘      │
│                                                                        │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                      │
│  │ Notifica-  │  │ Scholarship│  │ AdminLogs  │                      │
│  │ tions      │  │ Collection │  │ Collection │                      │
│  └────────────┘  └────────────┘  └────────────┘                      │
└──────────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                         EXTERNAL SERVICES                              │
│                                                                        │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐      │
│  │  Razorpay  │  │Nodemailer  │  │  Redis     │  │   AWS S3   │      │
│  │  Gateway   │  │  (Email)   │  │  (Cache)   │  │  (Storage) │      │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘      │
└──────────────────────────────────────────────────────────────────────────┘
```

### 10.2 Architecture Principles

1. **Microservices-ready**: NestJS modules designed with clear boundaries for potential microservices migration
2. **Stateless**: All authentication state managed via JWT, no server-side session storage
3. **Event-driven**: Payment webhooks processed asynchronously for reliability
4. **Caching layer**: Redis implemented for frequently accessed data (fee structures, student profiles)
5. **Job queue**: BullMQ for handling background tasks (email notifications, report generation)
6. **API versioning**: All endpoints versioned (v1) for future compatibility

---

## 11. Backend Module Breakdown (NestJS)

### 11.1 Authentication Module
```
├── auth/
│   ├── controllers/
│   │   └── auth.controller.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── jwt.service.ts
│   │   └── otp.service.ts
│   ├── guards/
│   │   ├── jwt-auth.guard.ts
│   │   └── roles.guard.ts
│   ├── strategies/
│   │   └── jwt.strategy.ts
│   ├── dto/
│   │   ├── login.dto.ts
│   │   ├── reset-password.dto.ts
│   │   └── verify-otp.dto.ts
│   └── auth.module.ts
```

**Endpoints:**
- `POST /api/v1/auth/login` - Student login with enrollment number + password
- `POST /api/v1/auth/forgot-password` - Initiate OTP-based password reset
- `POST /api/v1/auth/verify-otp` - Verify OTP and reset password
- `POST /api/v1/auth/refresh` - Refresh JWT token
- `POST /api/v1/auth/logout` - Invalidate JWT token

### 11.2 Student Module
```
├── students/
│   ├── controllers/
│   │   ├── student.controller.ts
│   │   └── student-profile.controller.ts
│   ├── services/
│   │   ├── student.service.ts
│   │   ├── fee-dashboard.service.ts
│   │   └── payment-history.service.ts
│   ├── dto/
│   │   ├── update-profile.dto.ts
│   │   └── student-filter.dto.ts
│   └── student.module.ts
```

**Endpoints:**
- `GET /api/v1/students/me` - Get current student profile
- `GET /api/v1/students/:id/fee-dashboard` - Get fee dashboard data
- `GET /api/v1/students/:id/payment-history` - Get payment history
- `PUT /api/v1/students/me/profile` - Update student profile
- `GET /api/v1/students/:id/defaulters` - Check if student is defaulter

### 11.3 Fee Management Module
```
├── fees/
│   ├── controllers/
│   │   ├── fee-structure.controller.ts
│   │   ├── fee-payment.controller.ts
│   │   └── fee-dashboard.controller.ts
│   ├── services/
│   │   ├── fee-structure.service.ts
│   │   ├── fee-payment.service.ts
│   │   ├── partial-payment.service.ts
│   │   └── scholarship.service.ts
│   ├── dto/
│   │   ├── create-fee-structure.dto.ts
│   │   ├── upload-fee-csv.dto.ts
│   │   ├── initiate-payment.dto.ts
│   │   └── apply-scholarship.dto.ts
│   └── fee.module.ts
```

**Endpoints:**
- `GET /api/v1/fees/structure/:studentId` - Get fee structure for student
- `POST /api/v1/fees/structure` - Create fee structure (admin)
- `POST /api/v1/fees/structure/upload` - Batch upload fee structure via CSV
- `PUT /api/v1/fees/structure/:id` - Update fee structure
- `POST /api/v1/fees/payments/initiate` - Initiate Razorpay payment
- `POST /api/v1/fees/payments/verify` - Verify payment (webhook)
- `GET /api/v1/fees/payments/status/:transactionId` - Check payment status
- `POST /api/v1/fees/scholarship/apply` - Apply scholarship offset
- `GET /api/v1/fees/defaulters` - Get defaulter list

### 11.4 Payment Module
```
├── payments/
│   ├── controllers/
│   │   ├── payment.controller.ts
│   │   └── webhook.controller.ts
│   ├── services/
│   │   ├── razorpay.service.ts
│   │   ├── payment-processor.service.ts
│   │   ├── webhook-handler.service.ts
│   │   └── receipt-generator.service.ts
│   ├── dto/
│   │   ├── initiate-payment.dto.ts
│   │   └── webhook-payload.dto.ts
│   └── payment.module.ts
```

**Endpoints:**
- `POST /api/v1/payments/create-order` - Create Razorpay order
- `POST /api/v1/payments/verify` - Verify payment signature
- `POST /api/v1/payments/webhook` - Razorpay webhook endpoint (public)
- `GET /api/v1/payments/:id/status` - Get payment status
- `GET /api/v1/payments/:id/receipt` - Download payment receipt PDF

### 11.5 Admin Module
```
├── admin/
│   ├── controllers/
│   │   ├── dashboard.controller.ts
│   │   ├── defaulter.controller.ts
│   │   ├── transaction.controller.ts
│   │   └── report.controller.ts
│   ├── services/
│   │   ├── dashboard.service.ts
│   │   ├── defaulter.service.ts
│   │   ├── transaction.service.ts
│   │   └── report-generator.service.ts
│   ├── dto/
│   │   ├── dashboard-filter.dto.ts
│   │   └── send-reminder.dto.ts
│   └── admin.module.ts
```

**Endpoints:**
- `GET /api/v1/admin/dashboard/summary` - Get dashboard summary stats
- `GET /api/v1/admin/dashboard/collections` - Get collection analytics
- `GET /api/v1/admin/defaulters` - Get defaulter list with filters
- `POST /api/v1/admin/defaulters/remind` - Send reminders to defaulters
- `GET /api/v1/admin/transactions` - Get transaction logs
- `GET /api/v1/admin/reports/financial` - Generate financial report
- `GET /api/v1/admin/reports/department/:hodId` - Department-wise report (HOD view)

### 11.6 Notification Module
```
├── notifications/
│   ├── controllers/
│   │   └── notification.controller.ts
│   ├── services/
│   │   ├── email.service.ts
│   │   ├── sms.service.ts
│   │   ├── reminder-scheduler.service.ts
│   │   └── in-app-notification.service.ts
│   ├── cron/
│   │   └── reminder.cron.ts
│   ├── dto/
│   │   └── send-notification.dto.ts
│   └── notification.module.ts
```

**Endpoints:**
- `POST /api/v1/notifications/send` - Send notification (admin)
- `POST /api/v1/notifications/reminders` - Trigger reminder scheduler
- `GET /api/v1/notifications/student/:studentId` - Get student's in-app notifications
- `PUT /api/v1/notifications/:id/read` - Mark notification as read

### 11.7 Shared Modules
```
├── shared/
│   ├── config/
│   │   ├── database.config.ts
│   │   ├── razorpay.config.ts
│   │   └── email.config.ts
│   ├── guards/
│   ├── interceptors/
│   ├── filters/
│   │   └── global-exception.filter.ts
│   ├── middlewares/
│   │   ├── logger.middleware.ts
│   │   └── rate-limiter.middleware.ts
│   ├── utils/
│   │   ├── csv-parser.util.ts
│   │   ├── date-helper.util.ts
│   │   └── receipt-generator.util.ts
│   └── shared.module.ts
```

---

## 12. Database Design and Entity Relationships (Prisma)

### 12.1 Schema Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Students     │     │  FeePayments    │     │ Transactions    │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id              │────<│ studentId       │     │ id              │
│ enrollmentNo    │     │ semesterId      │     │ studentId       │
│ name            │     │ feeHead         │     │ amount          │
│ email           │     │ amount          │     │ gatewayRef      │
│ phone           │     │ razorpayId      │     │ status          │
│ branch          │     │ status          │     │ method          │
│ year            │     │ paidAt          │     │ createdAt       │
│ batch           │     │ receiptUrl      │     │ metadata        │
│ password        │     │ remainingDues   │     └─────────────────┘
│ role            │     └─────────────────┘            │
│ createdAt       │            │                       │
│ updatedAt       │            │                       │
└─────────────────┘            │                       │
        │                      │                       │
        │              ┌───────┘                       │
        │              ▼                               │
        │      ┌─────────────────┐                    │
        │      │  Scholarships   │                    │
        │      ├─────────────────┤                    │
        │      │ id              │                    │
        │      │ studentId       │                    │
        │      │ amount          │                    │
        │      │ type            │                    │
        │      │ appliedAt       │                    │
        │      │ approvedBy      │                    │
        │      └─────────────────┘                    │
        │                                             │
        ▼                                             │
┌─────────────────┐     ┌─────────────────┐          │
│ FeeStructures   │     │  Notifications  │          │
├─────────────────┤     ├─────────────────┤          │
│ id              │     │ id              │          │
│ batch           │     │ studentId       │◄─────────┘
│ branch          │     │ type            │
│ year            │     │ message         │
│ semester        │     │ sentAt          │
│ feeHeads[]      │     │ read            │
│ createdAt       │     │ metadata        │
│ updatedAt       │     └─────────────────┘
└─────────────────┘
```

### 12.2 Prisma Schema (MongoDB)

```prisma
// Enhanced Prisma Schema for SmartFee Portal

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

// ==========================
// Student Model
// ==========================
model Student {
  id               String          @id @default(auto()) @map("_id") @db.ObjectId
  enrollmentNo     String          @unique
  name             String
  email            String          @unique
  phone            String
  branch           String          // CS, EC, ME, CE, etc.
  year             Int             // 1, 2, 3, 4
  batch            String          // 2024-2028
  semester         Int             // 1-8
  passwordHash     String
  isActive         Boolean         @default(true)
  role             Role            @default(STUDENT)
  feePayments      FeePayment[]
  scholarships     Scholarship[]
  notifications    Notification[]
  transactions     Transaction[]
  createdAt        DateTime        @default(now())
  updatedAt        DateTime        @updatedAt

  @@index([enrollmentNo])
  @@index([email])
  @@index([branch, year, batch])
}

// ==========================
// Fee Structure Model
// ==========================
model FeeStructure {
  id          String          @id @default(auto()) @map("_id") @db.ObjectId
  batch       String
  branch      String
  year        Int
  semester    Int
  feeHeads    FeeHead[]
  isActive    Boolean         @default(true)
  createdBy   String          @db.ObjectId
  createdAt   DateTime        @default(now())
  updatedAt   DateTime        @updatedAt

  @@unique([batch, branch, year, semester])
  @@index([batch, semester])
  @@index([branch, semester])
}

// ==========================
// Fee Head (Embedded in FeeStructure)
// ==========================
type FeeHead {
  id          String
  name        String          // Tuition, Exam, Hostel, Bus, Library
  amount      Float
  dueDate     DateTime
  description String?
  isActive    Boolean         @default(true)
}

// ==========================
// Fee Payment Model
// ==========================
model FeePayment {
  id              String          @id @default(auto()) @map("_id") @db.ObjectId
  studentId       String          @db.ObjectId
  student         Student         @relation(fields: [studentId], references: [id])
  semester        Int
  feeHead         String          // Name of the fee head
  originalAmount  Float
  paidAmount      Float
  remainingDues   Float
  razorpayId      String?         // Razorpay payment ID
  orderId         String?         // Razorpay order ID
  status          PaymentStatus   @default(PENDING)
  paidAt          DateTime?
  receiptUrl      String?         // S3 URL
  paymentMethod   String?         // UPI, Card, NetBanking, Wallet
  metadata        Json?
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  @@index([studentId])
  @@index([status])
  @@index([razorpayId])
  @@index([createdAt])
  @@index([studentId, semester])
}

// ==========================
// Transaction Model
// ==========================
model Transaction {
  id              String          @id @default(auto()) @map("_id") @db.ObjectId
  studentId       String          @db.ObjectId
  student         Student         @relation(fields: [studentId], references: [id])
  amount          Float
  feeHeads        String[]        // Array of fee head names
  gatewayRef      String          // Razorpay payment ID
  orderId         String?
  status          TransactionStatus @default(CREATED)
  method          String?         // Payment method
  type            TransactionType @default(PAYMENT)
  metadata        Json?
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  @@index([studentId])
  @@index([gatewayRef])
  @@index([createdAt])
  @@index([status])
}

// ==========================
// Scholarship Model
// ==========================
model Scholarship {
  id              String          @id @default(auto()) @map("_id") @db.ObjectId
  studentId       String          @db.ObjectId
  student         Student         @relation(fields: [studentId], references: [id])
  amount          Float
  type            String          // Merit, Need-based, Sports, etc.
  description     String?
  appliedAt       DateTime        @default(now())
  approvedBy      String?         @db.ObjectId
  approvedAt      DateTime?
  status          ScholarshipStatus @default(PENDING)
  validity        DateTime?       // Expiry date of scholarship
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  @@index([studentId])
  @@index([status])
}

// ==========================
// Notification Model
// ==========================
model Notification {
  id              String          @id @default(auto()) @map("_id") @db.ObjectId
  studentId       String          @db.ObjectId
  student         Student         @relation(fields: [studentId], references: [id])
  type            NotificationType
  subject         String?
  message         String
  sentAt          DateTime        @default(now())
  readAt          DateTime?
  metadata        Json?
  createdAt       DateTime        @default(now())

  @@index([studentId])
  @@index([type])
  @@index([sentAt])
  @@index([readAt])
}

// ==========================
// Admin Activity Log Model
// ==========================
model AdminActivityLog {
  id              String          @id @default(auto()) @map("_id") @db.ObjectId
  adminId         String          @db.ObjectId
  adminEmail      String
  action          String          // CREATE, UPDATE, DELETE, EXPORT, etc.
  module          String          // FeeStructure, Student, Payment, etc.
  changes         Json?
  ipAddress       String?
  userAgent       String?
  createdAt       DateTime        @default(now())

  @@index([adminId])
  @@index([module])
  @@index([createdAt])
}

// ==========================
// Enums
// ==========================
enum Role {
  STUDENT
  ACCOUNTS_TEAM
  HOD
  FINANCE_CONTROLLER
  SYSTEM_ADMIN
}

enum PaymentStatus {
  PENDING
  SUCCESS
  FAILED
  REFUNDED
  PARTIAL
}

enum TransactionStatus {
  CREATED
  AUTHORIZED
  CAPTURED
  FAILED
  REFUNDED
}

enum TransactionType {
  PAYMENT
  REFUND
  SCHOLARSHIP_ADJUSTMENT
  OFFLINE_PAYMENT
}

enum ScholarshipStatus {
  PENDING
  APPROVED
  REJECTED
  EXPIRED
}

enum NotificationType {
  FEE_REMINDER
  PAYMENT_SUCCESS
  PAYMENT_FAILURE
  SCHOLARSHIP_APPROVED
  SYSTEM_ALERT
  OTP_VERIFICATION
  DEFUALTER_NOTICE
}
```

### 12.3 Database Indexing Strategy

```javascript
// MongoDB Indexes (Create in MongoDB Atlas)
db.students.createIndex({ enrollmentNo: 1 }, { unique: true })
db.students.createIndex({ email: 1 }, { unique: true })
db.students.createIndex({ branch: 1, year: 1, batch: 1 })
db.students.createIndex({ role: 1 })

db.feePayments.createIndex({ studentId: 1 })
db.feePayments.createIndex({ studentId: 1, semester: 1 })
db.feePayments.createIndex({ status: 1 })
db.feePayments.createIndex({ razorpayId: 1 })
db.feePayments.createIndex({ createdAt: -1 })

db.transactions.createIndex({ studentId: 1 })
db.transactions.createIndex({ gatewayRef: 1 })
db.transactions.createIndex({ createdAt: -1 })
db.transactions.createIndex({ status: 1 })

db.feeStructures.createIndex({ batch: 1, semester: 1 })
db.feeStructures.createIndex({ branch: 1, semester: 1 })
db.feeStructures.createIndex({ isActive: 1 })

db.notifications.createIndex({ studentId: 1 })
db.notifications.createIndex({ sentAt: -1 })
db.notifications.createIndex({ readAt: 1 })

db.scholarships.createIndex({ studentId: 1 })
db.scholarships.createIndex({ status: 1 })
db.scholarships.createIndex({ appliedAt: -1 })

db.adminActivityLogs.createIndex({ adminId: 1 })
db.adminActivityLogs.createIndex({ createdAt: -1 })
```

---

## 13. API Requirements

### 13.1 API Design Principles

1. **RESTful**: Resources mapped to HTTP methods (GET, POST, PUT, DELETE)
2. **Versioned**: All endpoints prefixed with `/api/v1/`
3. **JSON-only**: Request and response bodies in JSON format
4. **Standard status codes**: Use appropriate HTTP status codes (200, 201, 400, 401, 403, 404, 500)
5. **Error handling**: Consistent error response format with error codes
6. **Pagination**: `?page=1&limit=20` for list endpoints
7. **Filtering**: `?field=value` query parameters for filtering
8. **Sorting**: `?sort=field:asc` query parameters for sorting

### 13.2 Error Response Format

```json
{
  "success": false,
  "statusCode": 400,
  "timestamp": "2024-01-15T10:30:00.000Z",
  "path": "/api/v1/auth/login",
  "message": "Invalid credentials",
  "errorCode": "AUTH_001",
  "details": {
    "field": "password",
    "reason": "Incorrect password entered"
  }
}
```

### 13.3 Success Response Format

```json
{
  "success": true,
  "statusCode": 200,
  "timestamp": "2024-01-15T10:30:00.000Z",
  "data": {
    // Response data
  },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

### 13.4 Detailed Endpoint Specifications

#### Authentication Endpoints

**POST /api/v1/auth/login**
```json
// Request
{
  "enrollmentNo": "GU2024CS001",
  "password": "securePassword123"
}

// Response (Success - 200)
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "enrollmentNo": "GU2024CS001",
    "name": "Rahul Kumar",
    "email": "rahul.kumar@geetauniversity.edu.in",
    "role": "STUDENT",
    "branch": "CS",
    "year": 2,
    "semester": 3
  }
}

// Response (Error - 401)
{
  "errorCode": "AUTH_001",
  "message": "Invalid enrollment number or password"
}
```

#### Fee Dashboard Endpoints

**GET /api/v1/fees/dashboard/:studentId**
```json
// Response
{
  "student": {
    "id": "507f1f77bcf86cd799439011",
    "name": "Rahul Kumar",
    "enrollmentNo": "GU2024CS001",
    "branch": "CS",
    "year": 2
  },
  "semesters": [
    {
      "semester": 3,
      "totalFee": 45000,
      "paidAmount": 30000,
      "pendingAmount": 15000,
      "dueDate": "2024-06-30T00:00:00.000Z",
      "feeHeads": [
        {
          "name": "Tuition",
          "amount": 25000,
          "paid": 25000,
          "status": "PAID"
        },
        {
          "name": "Exam",
          "amount": 5000,
          "paid": 0,
          "status": "PENDING"
        },
        {
          "name": "Hostel",
          "amount": 15000,
          "paid": 15000,
          "status": "PAID"
        }
      ]
    }
  ],
  "summary": {
    "totalDue": 15000,
    "overdueAmount": 0,
    "nextDueDate": "2024-06-30T00:00:00.000Z",
    "daysRemaining": 45,
    "isDefaulter": false
  }
}
```

#### Payment Initiation Endpoints

**POST /api/v1/payments/create-order**
```json
// Request
{
  "studentId": "507f1f77bcf86cd799439011",
  "semester": 3,
  "feeHeads": ["Exam", "Library"],
  "amount": 7000,
  "paymentMethod": "UPI"
}

// Response
{
  "orderId": "order_1234567890",
  "amount": 7000,
  "currency": "INR",
  "razorpayKeyId": "rzp_test_123456",
  "signature": "sig_1234567890",
  "paymentData": {
    "studentId": "507f1f77bcf86cd799439011",
    "semester": 3,
    "feeHeads": ["Exam", "Library"],
    "amount": 7000
  }
}
```

#### Webhook Endpoint (Public)

**POST /api/v1/payments/webhook**
```json
// Razorpay Webhook Payload
{
  "event": "payment.captured",
  "payload": {
    "payment": {
      "entity": {
        "id": "pay_1234567890",
        "order_id": "order_1234567890",
        "amount": 700000,
        "currency": "INR",
        "status": "captured",
        "method": "upi"
      }
    }
  }
}

// Response (Always 200 OK)
{
  "status": "success",
  "message": "Webhook processed"
}
```

---

## 14. Authentication and Authorization

### 14.1 Authentication Flow

1. **Login**: Student submits enrollment number and password
2. **Validation**: System validates credentials against database
3. **JWT Generation**: System generates access token (24h) and refresh token (7d)
4. **Token Storage**: Client stores tokens securely (Secure/HttpOnly cookies recommended)
5. **Request Authorization**: Client sends access token in `Authorization: Bearer <token>` header
6. **Token Validation**: Guard validates token on each protected endpoint
7. **Token Refresh**: Client uses refresh token to get new access token when expired

### 14.2 Authorization (RBAC)

```
┌─────────────────────┬──────────┬──────────┬──────────┬──────────────┐
│ Endpoint            │ Student  │ Accounts │ HOD      │ Finance      │
│                     │          │ Team     │          │ Controller   │
├─────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ /auth/*             │ ✅       │ ✅       │ ✅       │ ✅           │
│ /students/me        │ ✅       │ ✅       │ ✅       │ ✅           │
│ /fees/dashboard     │ ✅       │ ✅       │ ✅       │ ✅           │
│ /payments/*         │ ✅       │ ✅       │ ❌       │ ✅           │
│ /admin/dashboard    │ ❌       │ ✅       │ ❌       │ ✅           │
│ /admin/defaulters   │ ❌       │ ✅       │ ✅(dept) │ ✅           │
│ /admin/transactions │ ❌       │ ✅       │ ❌       │ ✅           │
│ /admin/reports      │ ❌       │ ✅       │ ✅(dept) │ ✅           │
│ /fees/structure/*   │ ❌       │ ✅       │ ❌       │ ✅           │
│ /fees/scholarship/* │ ❌       │ ❌       │ ❌       │ ✅           │
│ /admin/users/*      │ ❌       │ ❌       │ ❌       │ ❌(sys admin) │
└─────────────────────┴──────────┴──────────┴──────────┴──────────────┘
```

### 14.3 Guard Implementation

```typescript
// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Role[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role === role);
  }
}
```

---

## 15. Mobile Application Features (Flutter)

### 15.1 Overview

The mobile application is built using Flutter for cross-platform compatibility (iOS and Android). It provides a seamless, mobile-first experience for students to manage fees and for admins to monitor operations.

### 15.2 App Screens

| Screen | Features | Target User |
|--------|----------|-------------|
| **Login Screen** | Enrollment number + password input, forgot password link, biometric login option | Student |
| **Fee Dashboard** | Semester-wise fee cards, Quick Pay CTA, pending dues summary, due date countdown | Student |
| **Payment Screen** | Fee head selection with checkboxes, amount summary, payment method selection, Razorpay SDK integration | Student |
| **Payment History** | List of all payments with filters, transaction status badges, receipt download | Student |
| **Receipt Viewer** | PDF receipt preview with zoom, download option, share option | Student |
| **Notifications** | In-app notification center with read/unread status, push notifications | Student |
| **Profile Screen** | Student profile information, logout, app settings | Student |
| **Admin Dashboard** | Collection analytics charts, defaulter metrics, quick action buttons | Admin |
| **Defaulter Management** | Defaulter list with filters, send reminder bulk action | Admin |
| **Fee Structure** | Create/edit fee structure, CSV upload, preview | Admin |
| **Transaction Logs** | Filterable transaction logs, search, export | Admin |
| **Reports** | Financial reports, department-wise reports, export options | Admin/HOD |

### 15.3 Flutter Architecture

```
lib/
├── core/
│   ├── constants/
│   ├── themes/
│   ├── utils/
│   ├── widgets/
│   ├── services/
│   │   ├── api/
│   │   ├── storage/
│   │   └── notification/
│   └── routes/
├── features/
│   ├── auth/
│   │   ├── presentation/
│   │   ├── domain/
│   │   └── data/
│   ├── fee_dashboard/
│   ├── payment/
│   ├── history/
│   ├── receipts/
│   ├── notifications/
│   ├── profile/
│   ├── admin_dashboard/
│   ├── defaulter_management/
│   ├── fee_structure/
│   └── transactions/
└── main.dart
```

### 15.4 State Management

**Provider/Cubit Pattern** for state management:
- `AuthCubit`: Login, logout, token refresh, OTP verification
- `FeeDashboardCubit`: Fetch and update fee data, handle partial payments
- `PaymentCubit`: Initiate payment, handle Razorpay integration, verify payment
- `AdminDashboardCubit`: Fetch analytics, filter data
- `NotificationCubit`: Fetch notifications, mark read

### 15.5 Razorpay Integration

```dart
// payment_screen.dart
void initiatePayment() async {
  try {
    // 1. Create order on backend
    final order = await api.createOrder(paymentData);
    
    // 2. Initialize Razorpay
    final razorpay = Razorpay();
    razorpay.on(Razorpay.EVENT_PAYMENT_SUCCESS, _handlePaymentSuccess);
    razorpay.on(Razorpay.EVENT_PAYMENT_ERROR, _handlePaymentError);
    razorpay.on(Razorpay.EVENT_EXTERNAL_WALLET, _handleExternalWallet);
    
    // 3. Open payment sheet
    var options = {
      'key': order.razorpayKeyId,
      'amount': order.amount,
      'name': 'Geeta University',
      'description': 'Semester Fee Payment',
      'order_id': order.orderId,
      'prefill': {
        'contact': student.phone,
        'email': student.email,
      },
      'theme': {'color': '#1a56db'}
    };
    razorpay.open(options);
  } catch (e) {
    // Handle error
  }
}
```

### 15.6 Offline Capabilities

- **Caching**: Fee dashboard data cached with Hive for 30 minutes
- **Offline Challan Generation**: Generate PDF challan without internet
- **Payment Drafts**: Save payment drafts locally when offline
- **Sync**: Auto-sync when internet is restored
- **Warm Start**: App launches quickly with cached data

### 15.7 Push Notifications

- **FCM Integration**: Firebase Cloud Messaging for push notifications
- **Notification Types**: Fee reminders, payment confirmations, alerts
- **Deep Linking**: Navigate directly to payment screen from notification

### 15.8 Accessibility

- Screen reader support (TalkBack/VoiceOver)
- Text scaling for users with vision impairments
- High contrast mode
- Accessible touch targets (minimum 44x44 dp)
- Semantic labels for all interactive elements

---

## 16. Admin Features (Web Dashboard)

### 16.1 Admin Dashboard

The web admin dashboard is built with React.js + Tailwind CSS, optimized for desktop and tablet usage.

**Dashboard Components:**

1. **Stats Cards**
   - Total Collection Today (with percentage change)
   - This Month Collection (with trend indicator)
   - Pending Dues (total amount)
   - Defaulter Count (with breakdown by semester)

2. **Charts** (Chart.js)
   - Daily Collection Trend (line chart)
   - Fee Head-wise Collection (pie chart)
   - Department-wise Collection (bar chart)
   - Monthly Collection (bar chart)

3. **Recent Transactions**
   - Table: Date, Student, Fee Head, Amount, Status
   - Real-time updates via WebSocket (optional)

4. **Quick Actions**
   - Send Reminders to Defaulters
   - Upload Fee Structure
   - Generate Reports

### 16.2 Fee Structure Management

**CSV Upload Interface:**
```
| enrollmentNo | semester | feeHead    | amount | dueDate    |
|--------------|----------|------------|--------|------------|
| GU2024CS001  | 3        | Tuition    | 25000  | 2024-06-30 |
| GU2024CS001  | 3        | Exam       | 5000   | 2024-06-30 |
| GU2024CS001  | 3        | Hostel     | 15000  | 2024-06-30 |
```

**Drag-and-Drop Zone**
- File type: CSV only
- Max size: 5MB
- Progress indicator for upload
- Validation results preview

### 16.3 Defaulter Management

**Defaulter Table:**
| Enrollment No | Name | Branch | Semester | Pending Amount | Due Date | Reminders Sent | Actions |
|---------------|------|--------|----------|----------------|----------|----------------|---------|
| GU2024CS001 | Rahul Kumar | CS | 3 | ₹15,000 | 2024-06-30 | 2 | [Remind] [View] |

**Filters:**
- Branch dropdown
- Semester range
- Amount range
- Due date range
- Reminder count

### 16.4 Transaction Logs

**Transaction Table:**
| Date | Student | Enrollment | Fee Head | Amount | Method | Status | Transaction ID |
|------|---------|------------|----------|--------|--------|--------|----------------|
| 2024-05-15 | Rahul Kumar | GU2024CS001 | Tuition | ₹25,000 | UPI | ✅ Success | pay_123456 |

**Search:** By student name or enrollment number

**Filters:**
- Date range
- Fee head
- Payment method
- Status

**Export:** CSV, PDF

---

## 17. Notifications

### 17.1 Email Templates

| Type | Subject | When Sent | Template Variables |
|------|---------|-----------|-------------------|
| **Payment Receipt** | "Receipt for Semester Fee Payment - Geeta University" | On successful payment | studentName, enrollmentNo, amount, feeHead, transactionId, date |
| **Fee Reminder - 7 Days** | "Reminder: Semester Fee Due in 7 Days" | 7 days before due date | studentName, amount, dueDate, semester, feeHeads |
| **Fee Reminder - 3 Days** | "URGENT: Semester Fee Due in 3 Days" | 3 days before due date | studentName, amount, dueDate, semester, feeHeads |
| **Fee Reminder - 1 Day** | "LAST REMINDER: Semester Fee Due Tomorrow" | 1 day before due date | studentName, amount, dueDate, semester, feeHeads |
| **Payment Confirmation** | "Payment Confirmation - Geeta University" | On payment initiation | studentName, amount, orderId, date |
| **Payment Failure** | "Payment Failed - Geeta University" | On payment failure | studentName, amount, reason, retryLink |
| **Password Reset OTP** | "OTP for Password Reset - Geeta University" | On OTP request | otp, expiryTime |
| **Defaulter Notice** | "Defaulter Notice - Immediate Action Required" | On identifying defaulter | studentName, overdueAmount, dueDate, paymentLink |

### 17.2 In-App Notifications

| Type | Priority | Persistent Until |
|------|----------|------------------|
| Fee Reminder | High | 30 days after due date |
| Payment Confirmation | Medium | 7 days |
| Payment Failure | High | 15 days or until resolved |
| Scholarship Approval | Medium | 30 days |
| System Alert | High | Indefinitely |

### 17.3 Notification Scheduler (Cron Jobs)

```javascript
// cron/reminder-scheduler.ts
import * as cron from 'node-cron';
import { NotificationService } from '../notification.service';

// Run daily at 9:00 AM
cron.schedule('0 9 * * *', async () => {
  const today = new Date();
  const dueDates = [
    { days: 7, type: '7_DAYS' },
    { days: 3, type: '3_DAYS' },
    { days: 1, type: '1_DAY' }
  ];

  for (const { days, type } of dueDates) {
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + days);
    await notificationService.sendFeeReminders(targetDate, type);
  }
});

// Run every 4 hours for defaulter detection
cron.schedule('0 */4 * * *', async () => {
  await notificationService.markDefaulters();
});
```

---

## 18. Error Handling

### 18.1 Global Exception Filter

```typescript
// global-exception.filter.ts
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = 500;
    let message = 'Internal server error';
    let errorCode = 'SYS_001';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse() as any;
      message = exceptionResponse.message || exception.message;
      errorCode = exceptionResponse.errorCode || `HTTP_${status}`;
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      status = 400;
      message = this.handlePrismaError(exception);
      errorCode = `DB_${exception.code}`;
    }

    response.status(status).json({
      success: false,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
      errorCode,
      ...(process.env.NODE_ENV === 'development' && {
        stack: (exception as any).stack
      })
    });
  }

  private handlePrismaError(error: Prisma.PrismaClientKnownRequestError): string {
    switch (error.code) {
      case 'P2002':
        return 'Duplicate entry found';
      case 'P2025':
        return 'Record not found';
      default:
        return 'Database error occurred';
    }
  }
}
```

### 18.2 Validation Pipe

```typescript
// main.ts - Global validation
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    exceptionFactory: (errors) => {
      const messages = errors.map(error => {
        const constraints = Object.values(error.constraints || {});
        return {
          field: error.property,
          errors: constraints
        };
      });
      return new BadRequestException({
        statusCode: 400,
        message: 'Validation failed',
        errorCode: 'VAL_001',
        details: messages
      });
    }
  })
);
```

### 18.3 Error Codes

| Error Code | Description | HTTP Status |
|------------|-------------|-------------|
| AUTH_001 | Invalid credentials | 401 |
| AUTH_002 | Token expired | 401 |
| AUTH_003 | Insufficient permissions | 403 |
| AUTH_004 | Invalid OTP | 400 |
| PAY_001 | Payment initiation failed | 400 |
| PAY_002 | Payment verification failed | 400 |
| PAY_003 | Duplicate payment detected | 409 |
| FEE_001 | Fee structure not found | 404 |
| FEE_002 | Fee already paid | 409 |
| FEE_003 | Insufficient balance for partial payment | 400 |
| VAL_001 | Validation failed | 400 |
| DB_001 | Database operation failed | 500 |
| SYS_001 | Internal server error | 500 |
| NET_001 | External service timeout | 504 |

---

## 19. Security Requirements

### 19.1 Data Protection

| Requirement | Implementation |
|-------------|----------------|
| **Data Encryption** | AES-256 encryption for sensitive data (PII, financial records) |
| **In-transit Encryption** | TLS 1.2+ with HSTS headers |
| **At-rest Encryption** | MongoDB Atlas encryption at rest |
| **Backup Encryption** | AES-256 encrypted backups |
| **Sensitive Data Masking** | Mask PII in logs and non-production environments |
| **Data Retention** | Financial records retained for 7 years per regulatory requirements |

### 19.2 Authentication & Authorization

| Requirement | Implementation |
|-------------|----------------|
| **Password Policy** | Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number, 1 special character |
| **Password History** | Last 5 passwords remembered to prevent reuse |
| **Account Lockout** | Lock after 5 failed attempts (15 minutes) |
| **Session Management** | JWT with 24h access, 7d refresh, 30min idle timeout |
| **MFA** | OTP for password reset and sensitive operations |
| **RBAC** | Granular role-based access control |
| **Brute Force Protection** | Rate limiting all endpoints |

### 19.3 API Security

| Requirement | Implementation |
|-------------|----------------|
| **CORS** | Whitelist only trusted domains |
| **Input Validation** | class-validator with DTOs, sanitization |
| **SQL Injection** | Prevented by Prisma ORM |
| **XSS Protection** | Helmet.js, CSP headers |
| **CSRF Protection** | CSRF tokens for state-changing requests |
| **Rate Limiting** | 100 requests/minute per IP |
| **API Keys** | For internal services only |
| **Security Headers** | X-Content-Type-Options, X-Frame-Options, Referrer-Policy |

### 19.4 Webhook Security

```typescript
// webhook.controller.ts
@Post('webhook')
async handleWebhook(
  @Req() request: Request,
  @Headers('x-razorpay-signature') signature: string
) {
  // 1. Verify webhook signature
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const isValid = this.razorpayService.verifyWebhookSignature(
    request.body,
    signature,
    webhookSecret
  );
  
  if (!isValid) {
    throw new UnauthorizedException('Invalid webhook signature');
  }
  
  // 2. Process webhook asynchronously
  await this.webhookService.processPaymentWebhook(request.body);
  
  // 3. Always return 200 OK
  return { status: 'success' };
}
```

---

## 20. Performance Requirements

### 20.1 Response Time Targets

| Operation | Target (P95) | Priority |
|-----------|--------------|----------|
| Login | < 300ms | P0 |
| Dashboard Load | < 500ms | P0 |
| Payment Initiation | < 200ms | P0 |
| Fee Structure Fetch | < 500ms | P0 |
| Receipt Generation | < 2s | P0 |
| Report Generation | < 5s | P1 |
| CSV Upload Processing | < 10s (1000 records) | P1 |
| Defaulter List | < 500ms | P0 |

### 20.2 Database Performance

```javascript
// MongoDB Indexes (Performance Critical)
db.feePayments.createIndex({ 
  studentId: 1, 
  semester: 1, 
  status: 1 
}, { background: true });

db.feePayments.createIndex({ 
  paidAt: -1 
});

db.transactions.createIndex({ 
  studentId: 1, 
  createdAt: -1 
});

db.students.createIndex({ 
  branch: 1, 
  year: 1, 
  batch: 1, 
  semester: 1 
});

// For text search
db.students.createIndex({
  enrollmentNo: "text",
  name: "text",
  email: "text"
});
```

### 20.3 Caching Strategy

| Cache Type | TTL | Implementation |
|------------|-----|----------------|
| Fee Structure | 1 hour | Redis |
| Student Dashboard | 5 minutes | Redis |
| Fee Head List | 1 day | Redis |
| Admin Stats | 15 minutes | Redis |
| Payment Receipts | 30 days | CDN/S3 |
| Defaulter List | 5 minutes | Redis |

### 20.4 Performance Optimizations

1. **Database Query Optimization**
   - Use `select` to fetch only required fields
   - `lean()` for read-only operations
   - Pagination for all list endpoints

2. **Image Optimization**
   - Serve optimized university logo and assets
   - Lazy loading for charts and reports

3. **Background Processing**
   - Email sending via BullMQ job queue
   - Report generation processed asynchronously
   - Receipt generation in background

4. **CDN Usage**
   - PDF receipts served via S3 + CDN
   - Static assets hosted on CDN

---

## 21. Analytics and Logging

### 21.1 Analytics Events

| Event | Triggers | Data Collected |
|-------|----------|----------------|
| **Login** | Student logs in | enrollmentNo, timestamp, device, IP |
| **Payment Initiated** | Student starts payment | studentId, amount, feeHeads, timestamp |
| **Payment Success** | Payment confirmed | studentId, amount, feeHeads, method, timestamp |
| **Payment Failed** | Payment failed | studentId, amount, reason, timestamp |
| **Receipt Download** | Receipt downloaded | studentId, paymentId, timestamp |
| **Reminder Sent** | Reminder email sent | studentId, type, timestamp |
| **CSV Upload** | Fee structure uploaded | adminId, records, timestamp |
| **Report Generated** | Report exported | adminId, reportType, timestamp |

### 21.2 Logging Strategy

```typescript
// logger.service.ts
import { Logger } from '@nestjs/common';

export class AppLogger extends Logger {
  logPaymentEvent(event: PaymentEvent) {
    this.log({
      type: 'PAYMENT',
      event: event.type,
      studentId: event.studentId,
      amount: event.amount,
      transactionId: event.transactionId,
      timestamp: new Date().toISOString()
    });
  }

  logAdminAction(event: AdminAction) {
    this.log({
      type: 'ADMIN',
      action: event.action,
      adminId: event.adminId,
      module: event.module,
      changes: event.changes,
      timestamp: new Date().toISOString()
    });
  }

  logSecurityEvent(event: SecurityEvent) {
    this.error({
      type: 'SECURITY',
      event: event.type,
      details: event.details,
      severity: event.severity,
      timestamp: new Date().toISOString()
    });
  }
}
```

### 21.3 Monitoring

**Key Metrics:**
- API response times (per endpoint)
- Payment success rate
- Error rate (by error code)
- Database query performance
- Active users (students + admins)
- Daily transaction volume
- Email delivery success rate

**Alerting Rules:**
- API error rate > 5% → Send alert
- Payment failure rate > 10% → Send alert
- Response time > 1s for P95 → Send alert
- Database connection pool exhausted → Send alert
- Unusual activity detected → Send security alert

---

## 22. Project Folder Structure Recommendations

### 22.1 Backend (NestJS)

```
src/
├── auth/
│   ├── controllers/
│   ├── services/
│   ├── guards/
│   ├── strategies/
│   ├── dto/
│   ├── entities/
│   └── auth.module.ts
├── students/
│   ├── controllers/
│   ├── services/
│   ├── dto/
│   └── students.module.ts
├── fees/
│   ├── controllers/
│   ├── services/
│   ├── dto/
│   └── fees.module.ts
├── payments/
│   ├── controllers/
│   ├── services/
│   ├── dto/
│   └── payments.module.ts
├── admin/
│   ├── controllers/
│   ├── services/
│   ├── dto/
│   └── admin.module.ts
├── notifications/
│   ├── controllers/
│   ├── services/
│   ├── cron/
│   ├── dto/
│   └── notifications.module.ts
├── shared/
│   ├── config/
│   ├── constants/
│   ├── utils/
│   ├── filters/
│   ├── interceptors/
│   ├── middlewares/
│   ├── prisma/
│   └── shared.module.ts
├── app.module.ts
└── main.ts

tests/
├── unit/
├── integration/
└── e2e/

prisma/
├── schema.prisma
├── migrations/
└── seed.ts

.env.example
docker-compose.yml
package.json
tsconfig.json
```

### 22.2 Mobile App (Flutter)

```
lib/
├── core/
│   ├── constants/
│   ├── themes/
│   ├── utils/
│   ├── widgets/
│   ├── services/
│   │   ├── api/
│   │   ├── storage/
│   │   ├── notification/
│   │   └── analytics/
│   └── routes/
├── features/
│   ├── auth/
│   ├── fee_dashboard/
│   ├── payment/
│   ├── history/
│   ├── receipts/
│   ├── notifications/
│   ├── profile/
│   ├── admin_dashboard/
│   ├── defaulter_management/
│   ├── fee_structure/
│   └── transactions/
├── models/
├── providers/
└── main.dart

test/
├── unit/
└── widget/

assets/
├── fonts/
├── images/
└── translations/

android/
ios/
pubspec.yaml
```

### 22.3 Web Admin (React)

```
src/
├── components/
│   ├── common/
│   ├── auth/
│   ├── dashboard/
│   ├── fee-structure/
│   ├── payments/
│   ├── defaulters/
│   ├── reports/
│   └── transactions/
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── FeeStructure.jsx
│   ├── Defaulters.jsx
│   ├── Transactions.jsx
│   └── Reports.jsx
├── hooks/
├── contexts/
├── services/
├── utils/
├── styles/
└── app.jsx

public/
package.json
tailwind.config.js
vite.config.js
```

---

## 23. Development Milestones

| Phase | Duration | Deliverables | Description |
|-------|----------|--------------|-------------|
| **Phase 1: Foundation** | Week 1-2 | DB Schema, Prisma Setup, Basic Auth | Set up MongoDB, Prisma ORM, implement student authentication (login, registration) |
| **Phase 2: Core API** | Week 3-4 | Fee Structure API, Student Dashboard API | Implement fee management APIs, student dashboard endpoints, payment initiation |
| **Phase 3: Payment Integration** | Week 5 | Razorpay Integration, Webhook Handler | Integrate Razorpay payment gateway, implement webhook handling, payment verification |
| **Phase 4: Frontend (Mobile)** | Week 6-7 | Flutter App Screens | Develop student-facing mobile app: login, dashboard, payment, history, receipts |
| **Phase 5: Admin Features** | Week 8 | Admin Dashboard, Defaulter Management | Build admin web dashboard, fee structure management, defaulter management |
| **Phase 6: Notifications & PDF** | Week 9 | Email Service, PDF Generation, Cron Jobs | Implement email notifications, PDF receipt generation, reminder cron jobs |
| **Phase 7: Testing & Security** | Week 10 | Unit Tests, Security Audit, Bug Fixes | Comprehensive testing, security audit, performance optimization |
| **Phase 8: Deployment** | Week 11 | Production Deployment, Documentation | Deploy to production, create API documentation, user guides, handover |

---

## 24. Future Enhancements

### Phase 2 Enhancements

| Feature | Description | Priority |
|---------|-------------|----------|
| **Mobile Wallet** | Implement Geeta University digital wallet for students | P1 |
| **Installment Payments** | Allow students to pay fees in installments with schedules | P1 |
| **WhatsApp Integration** | Send reminders and receipts via WhatsApp Business API | P1 |
| **Parent Access** | Parents can view fee status and make payments on behalf of students | P1 |
| **Role-Based Mobile App** | Admin-specific mobile app for on-the-go management | P2 |
| **In-App Support Chat** | Integrated support chat for students | P2 |
| **Multi-Language Support** | Hindi and regional language support | P2 |
| **Analytics Dashboard** | Advanced analytics with predictive modeling for fee collections | P2 |

### Long-Term Vision

1. **AI-Powered Insights**
   - Predict defaulters using ML models
   - Optimize fee structure based on historical data
   - Personalized payment recommendations

2. **Blockchain Integration**
   - Immutable payment records on blockchain
   - Smart contracts for scholarship disbursement
   - Verifiable digital degrees with fee history

3. **University Ecosystem**
   - Integration with academic portal for fee-blocked exam registrations
   - Library fine integration
   - Hostel management system integration

4. **Mobile-First**
   - Biometric authentication (Face ID / Fingerprint)
   - Voice-based payments
   - AR-based campus navigation with fee desk locations

---

## 25. Assumptions

1. **Student Data**: Student data (enrollment numbers, names, emails, branches) is pre-loaded from the university's student information system
2. **Internet Connectivity**: Students have internet access for online payments; offline challan provided for those without internet
3. **Email Service**: Nodemailer with SMTP (Gmail/Outlook) configured for transactional emails
4. **Razorpay Account**: Production Razorpay merchant account is set up with appropriate credentials
5. **University Branding**: University logo, letterhead, and seal are provided for receipt generation
6. **Legal Compliance**: The system complies with Indian financial regulations (RBI guidelines) and data protection laws (IT Act)
7. **CSV Format**: Admin CSV uploads follow a predefined template with mandatory columns
8. **Mobile Coverage**: Most students have smartphones (iOS/Android) for the mobile app
9. **Admin Training**: Accounts department staff will be trained on using the admin dashboard
10. **Data Migration**: Historical fee data is available for migration to the new system

---

## 26. Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **Razorpay API Downtime** | High | Low | Implement fallback payment methods, retry logic, manual payment reconciliation |
| **Data Security Breach** | High | Low | Regular security audits, encryption, access controls, monitoring |
| **Poor Internet Connectivity** | Medium | Medium | Offline challan generation, retry mechanisms, lightweight app |
| **Student Adoption Issues** | Medium | Medium | Training sessions, incentives, campus-wide awareness campaigns |
| **Regulatory Changes** | Medium | Medium | Build with configurable compliance layer, regular legal reviews |
| **User Data Migration Issues** | Medium | Medium | Thorough data validation, testing with sample data, rollback plan |
| **Performance Bottlenecks** | Medium | Low | Load testing, database indexing, caching, scalable architecture |
| **Budget Constraints** | Low | Low | Open-source technologies, cloud cost optimization, phased rollout |

---

## 27. Acceptance Criteria

### 27.1 Authentication (P0)
- ✅ Student can log in with valid enrollment number and password
- ✅ Student receives error for invalid credentials
- ✅ Password reset via OTP works end-to-end
- ✅ JWT token is validated on all protected endpoints
- ✅ Rate limiting works on login attempts

### 27.2 Fee Dashboard (P0)
- ✅ Dashboard loads within 500ms
- ✅ Semester-wise cards display correct Total, Paid, Pending amounts
- ✅ Pending dues are accurate per fee head
- ✅ Quick Pay CTA is visible and functional

### 27.3 Payment (P0)
- ✅ Student can select multiple fee heads and initiate payment
- ✅ Razorpay payment gateway opens correctly
- ✅ Payment success updates fee dashboard in real-time
- ✅ Partial payment works with balance carried forward
- ✅ Duplicate payment prevention works
- ✅ Webhook handles payment verification correctly

### 27.4 Receipt Generation (P0)
- ✅ PDF receipt auto-generated on successful payment
- ✅ Receipt includes all required fields (student details, fee head, amount, transaction ID)
- ✅ University letterhead and seal displayed
- ✅ Receipt downloadable from payment history
- ✅ Receipt emailed to student

### 27.5 Admin Dashboard (P0)
- ✅ Dashboard displays total collection today, this month, pending dues
- ✅ Defaulter count displayed accurately
- ✅ Charts render correctly with real data
- ✅ Transaction logs filterable by date, branch, status

### 27.6 Fee Structure Management (P1)
- ✅ Admin can create fee structure via form
- ✅ CSV batch upload works with validation
- ✅ Fee structure assigned to correct students
- ✅ Edit and deactivate fee structure works

### 27.7 Defaulter Management (P0)
- ✅ Defaulters are auto-identified
- ✅ Defaulter list is filterable and searchable
- ✅ Bulk reminder emails send successfully
- ✅ Reminder history tracked

### 27.8 Notifications (P1)
- ✅ Reminder emails send at 7, 3, and 1 day before due date
- ✅ In-app notifications visible in student dashboard
- ✅ OTP emails delivered within 2 minutes
- ✅ Payment success/failure emails sent

### 27.9 Mobile App (P0)
- ✅ App launches and displays login screen
- ✅ Dashboard loads with data
- ✅ Payment flow works from mobile
- ✅ PDF receipts can be downloaded and shared
- ✅ Push notifications work

### 27.10 Performance (P0)
- ✅ API response time < 500ms for 95% of requests
- ✅ Database queries optimized with indexes
- ✅ Mobile app loads within 2 seconds on 4G
- ✅ Report generation completes within 5 seconds for 1000 records

---

## 28. Technical Glossary

| Term | Definition |
|------|------------|
| **JWT** | JSON Web Token - compact, URL-safe token for authentication and authorization |
| **RBAC** | Role-Based Access Control - access permissions based on user roles |
| **PII** | Personally Identifiable Information - data that can identify a specific individual |
| **MFA** | Multi-Factor Authentication - requiring multiple verification methods |
| **CORS** | Cross-Origin Resource Sharing - security mechanism for API access |
| **TLS** | Transport Layer Security - encryption protocol for secure communication |
| **CDN** | Content Delivery Network - distributed servers for content delivery |
| **Webhook** | HTTP callback triggered by events for real-time communication |
| **CSV** | Comma-Separated Values - plain text format for tabular data |
| **ORM** | Object-Relational Mapping - technique for database interaction |
| **ODM** | Object Document Mapping - MongoDB equivalent of ORM |
| **CRUD** | Create, Read, Update, Delete - basic database operations |
| **HOD** | Head of Department - academic department head |
| **Fee Head** | Category of fee (Tuition, Exam, Hostel, etc.) |
| **Defaulter** | Student with overdue fee payments |
| **Challan** | Official form for offline bank payment |
| **Semester** | Academic session half-year (typically 6 months) |
| **Batch** | Student cohort entering university in a specific year |
| **CPC** | Cost Per Click - not applicable |
| **CPS** | Cost Per Sale - not applicable |

---

## 29. References

1. Razorpay API Documentation: https://razorpay.com/docs/
2. NestJS Documentation: https://docs.nestjs.com/
3. Prisma Documentation: https://www.prisma.io/docs/
4. Flutter Documentation: https://docs.flutter.dev/
5. MongoDB Atlas: https://www.mongodb.com/atlas
6. Nodemailer Documentation: https://nodemailer.com/
7. PDFKit Documentation: https://pdfkit.org/
8. Chart.js Documentation: https://www.chartjs.org/
9. React Documentation: https://react.dev/
10. Tailwind CSS Documentation: https://tailwindcss.com/

---

## 30. Document Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project Manager | ___________ | ___________ | ___________ |
| Product Owner | ___________ | ___________ | ___________ |
| Lead Developer | ___________ | ___________ | ___________ |
| Technical Architect | ___________ | ___________ | ___________ |
| QA Lead | ___________ | ___________ | ___________ |
| Client Representative | ___________ | ___________ | ___________ |

---

*Document Version: 1.0*
*Last Updated: [Current Date]*
*Status: Draft for Review*

---

## Appendix A: Sample CSV Templates

### Fee Structure Upload Template
```csv
enrollmentNo,semester,feeHead,amount,dueDate,description
GU2024CS001,3,Tuition,25000,2024-06-30,Main tuition fee
GU2024CS001,3,Exam,5000,2024-06-30,Examination fee
GU2024CS001,3,Hostel,15000,2024-06-30,Hostel accommodation
GU2024CS001,3,Library,2000,2024-06-30,Library services
GU2024CS001,3,Bus,8000,2024-06-30,Bus transport
```

### Student Defaulters Export Template
```csv
enrollmentNo,name,branch,semester,pendingAmount,dueDate,daysOverdue,reminderCount
GU2024CS001,Rahul Kumar,CS,3,15000,2024-06-30,15,2
GU2024EC002,Priya Sharma,EC,5,25000,2024-05-15,45,4
```

### Transaction Export Template
```csv
date,studentName,enrollmentNo,feeHead,amount,method,status,transactionId
2024-05-15 10:30,Rahul Kumar,GU2024CS001,Tuition,25000,UPI,Success,pay_123456
2024-05-14 14:20,Priya Sharma,GU2024EC002,Hostel,15000,Card,Success,pay_123457
```

---

## Appendix B: API Test Scenarios

### Authentication Tests
- TC001: Login with correct credentials → Returns JWT token
- TC002: Login with incorrect password → Returns 401 Unauthorized
- TC003: Login with non-existent enrollment → Returns 401 Unauthorized
- TC004: Forgot password with valid email → OTP sent successfully
- TC005: Forgot password with invalid email → Returns 404 Not Found
- TC006: Reset password with correct OTP → Password updated
- TC007: Reset password with invalid OTP → Returns 400 Bad Request
- TC008: Access protected endpoint without token → Returns 401 Unauthorized
- TC009: Access protected endpoint with expired token → Returns 401 Unauthorized

### Payment Tests
- TC010: Initiate payment with valid data → Returns Razorpay order
- TC011: Initiate payment with invalid studentId → Returns 404
- TC012: Initiate payment with amount > pending dues → Returns 400
- TC013: Payment webhook with valid signature → Processes successfully
- TC014: Payment webhook with invalid signature → Returns 401
- TC015: Duplicate payment attempt → Returns 409 Conflict
- TC016: Partial payment with valid amount → Updates remaining dues

### Admin Tests
- TC017: Admin dashboard loads stats correctly → Returns summary
- TC018: Defaulter list returns students with overdue fees → Paginated response
- TC019: Send reminder to defaulters → Email sent, status updated
- TC020: CSV upload with valid data → Fee structure created
- TC021: CSV upload with invalid data → Returns 400 with validation errors
- TC022: Apply scholarship to student → Reduces payable amount

---

