
<?php
class User {

    public int $id;
    private string $email;
    private string $pwd;


    public function __construct($email=null, $pwd=null)
    {
        $this->email= $email;
        $this->pwd= $pwd;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of id
     *
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param int $id
     *
     * @return self
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of pwd
     *
     * @return string
     */
    public function getPwd(): string
    {
        return $this->pwd;
    }

    /**
     * Set the value of pwd
     *
     * @param string $pwd
     *
     * @return self
     */
    public function setPwd(string $pwd): self
    {
        $this->pwd = $pwd;

        return $this;
    }
}
?>