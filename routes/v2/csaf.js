import Api from '../../lib/Api';
import config from '../../conf/config';
import utils from '../../lib/utils';
import Secure from '../../lib/Secure';

module.exports = {
    collect_csaf: (req, res) => {
        let {from, to, amount} = req.decryptedData;
        Api.collectCsaf(from, to, amount).then(tx => {
          utils.success(res, tx);
        }).catch(e => {
          utils.error(res, e);
        });
    }
}
