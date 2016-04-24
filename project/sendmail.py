import smtplib


def sendemail(toaddr,fromaddr,fromname,subject,msg):
    message = """\nFrom: {} {}
    \nTo: {} 
    \nSubject: {}
    \n{}
    """
    messagetosend = message.format(
                                 fromaddr,
                                 fromname,
                                 toaddr,
                                 subject,
                                 msg)

    # Credentials (if needed)
    username = 'kenielpeart784@gmail.com'
    password = 'psewxinzxcasdsjn'

    # The actual mail send
    server = smtplib.SMTP('smtp.gmail.com:587')
    server.starttls()
    server.login(username, password)
    server.sendmail(fromaddr, toaddr, messagetosend)
    server.quit()
    return

