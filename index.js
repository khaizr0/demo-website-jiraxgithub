        // Chuyển đổi giữa form đăng nhập và đăng ký
        function showLogin() {
            document.getElementById('loginForm').classList.add('active');
            document.getElementById('registerForm').classList.remove('active');
            clearErrors();
        }

        function showRegister() {
            document.getElementById('registerForm').classList.add('active');
            document.getElementById('loginForm').classList.remove('active');
            clearErrors();
        }

        // Xóa các thông báo lỗi
        function clearErrors() {
            const errorMessages = document.querySelectorAll('.error-message, .success-message');
            errorMessages.forEach(msg => {
                msg.style.display = 'none';
                msg.textContent = '';
            });
        }

        // Validation đăng nhập
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            let isValid = true;
            
            // Validate email
            if (!email) {
                showError('loginEmailError', 'Vui lòng nhập email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('loginEmailError', 'Email không hợp lệ');
                isValid = false;
            }
            
            // Validate password
            if (!password) {
                showError('loginPasswordError', 'Vui lòng nhập mật khẩu');
                isValid = false;
            }
            
            if (isValid) {
                // Giả lập đăng nhập thành công
                alert('Đăng nhập thành công!');
                console.log('Login data:', { email, password });
            }
        });

        // Validation đăng ký
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            let isValid = true;
            
            // Validate name
            if (!name.trim()) {
                showError('registerNameError', 'Vui lòng nhập họ và tên');
                isValid = false;
            }
            
            // Validate email
            if (!email) {
                showError('registerEmailError', 'Vui lòng nhập email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('registerEmailError', 'Email không hợp lệ');
                isValid = false;
            }
            
            // Validate password
            if (!password) {
                showError('registerPasswordError', 'Vui lòng nhập mật khẩu');
                isValid = false;
            } else if (password.length < 6) {
                showError('registerPasswordError', 'Mật khẩu phải có ít nhất 6 ký tự');
                isValid = false;
            }
            
            // Validate confirm password
            if (!confirmPassword) {
                showError('confirmPasswordError', 'Vui lòng xác nhận mật khẩu');
                isValid = false;
            } else if (password !== confirmPassword) {
                showError('confirmPasswordError', 'Mật khẩu xác nhận không khớp');
                isValid = false;
            }
            
            // Validate terms agreement
            if (!agreeTerms) {
                alert('Vui lòng đồng ý với điều khoản sử dụng');
                isValid = false;
            }
            
            if (isValid) {
                // Giả lập đăng ký thành công
                alert('Đăng ký thành công!');
                console.log('Register data:', { name, email, password });
            }
        });

        // Hiển thị lỗi
        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }

        // Validate email format
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Các hàm cho social login (giả lập)
        function loginWithGoogle() {
            alert('Đăng nhập với Google (chức năng demo)');
        }

        function loginWithFacebook() {
            alert('Đăng nhập với Facebook (chức năng demo)');
        }

        function registerWithGoogle() {
            alert('Đăng ký với Google (chức năng demo)');
        }

        function registerWithFacebook() {
            alert('Đăng ký với Facebook (chức năng demo)');
        }

        function showForgotPassword() {
            alert('Chức năng quên mật khẩu (demo)');
        }

        // Xóa lỗi khi người dùng bắt đầu nhập
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', function() {
                const errorElement = this.parentNode.querySelector('.error-message');
                if (errorElement) {
                    errorElement.style.display = 'none';
                }
            });
        });