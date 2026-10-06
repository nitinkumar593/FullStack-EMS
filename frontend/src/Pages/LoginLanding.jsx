import LoginLeftSide from "../Component/LoginLeftside";

function LoginLanding() {
    return (
        <div>
            <div className="min-h-screen flex flex-col md:flex-row">
                <LoginLeftSide />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">

            <div className="w-full max-w-md animte-fade-in relative z-10">
                {/* header */}
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">Welcome Back</h2>
                    <p className="text-slate-500">Select your portal to securely access the system.</p>
                </div>
                {/* portals list  */}

                {/* footer */}

            </div>

            </div>
        </div>
    );
}

export default LoginLanding;