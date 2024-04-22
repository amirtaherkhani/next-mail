
openssl ecparam -name prime256v1 -genkey | openssl pkey -out ../src/certs/ecprivkey.pem
openssl pkey -in ecprivkey.pem -pubout -out ../src/certs/ecpubkey.pem
