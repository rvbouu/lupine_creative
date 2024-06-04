export default function SignUp() {


    return (
        <>
            <div class="row justify-space-between-md mt-5">
                <div class="login-card col-6 card">
                    <h2 class="card-header">Login</h2>
                    <form class="form login-form">
                        <div class="form-group">
                            <label class="form-label" for="email-login">Email:</label>
                            <input class="form-control" type="text" id="login" />
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="password-login">Password:</label>
                            <input class="form-control" type="password" id="password-login" />
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">login</button>
                        </div>
                    </form>
                </div>
                <div class="login-card col-6 card">
                    <h2 class="card-header">Signup</h2>
                    <form class="form signup-form">
                        <div class="form-group">
                            <label class="form-label" for="username-signup">Full Name:</label>
                            <input class="form-control" type="text" id="username-signup" />
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="email-signup">Email:</label>
                            <input class="form-control" type="text" id="email-signup" />
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="password-signup">Password:</label>
                            <input class="form-control" type="password" id="password-signup" />
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">signup</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
