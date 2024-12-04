If you're not using a virtual environment, you can modify the **Installation** section of the README file accordingly. Here's the updated version without the virtual environment setup:

```markdown
## Installation
```

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/stock-management-application.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd stock-management-application
   ```

3. **Install dependencies**:
   Make sure you have Python and pip installed on your system. Then, run:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations** to set up the database:
   ```bash
   python manage.py migrate
   ```

5. **Create a superuser** to access the Django admin:
   ```bash
   python manage.py createsuperuser
   ```

6. **Run the development server**:
   ```bash
   python manage.py runserver
   ```

7. **Access the application** by opening [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.
```

This version skips the steps related to setting up a virtual environment and assumes you're installing the dependencies globally on your system. Let me know if you need any other changes!
