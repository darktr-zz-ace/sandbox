import java.security.MessageDigest
import sun.misc.BASE64Encoder
import sun.misc.CharacterEncoder
class MD5Codec {

    static encode = { str ->
        MessageDigest md = MessageDigest.getInstance('MD5')
        md.update(str.getBytes('UTF-8'))
        return (new BASE64Encoder()).encode(md.digest())
    }

}