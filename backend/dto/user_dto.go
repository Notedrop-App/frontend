package dto

type UserDto struct {
	Email     string `json:"email"`
	Password  string `json:"password"`
	Username  string `json:"username"`
	PublicKey string `json:"public_key"`
	SaltKdf   string `json:"salt_kdf"`
}
