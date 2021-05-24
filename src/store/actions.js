export default {
    addCart(context, payload) {
        // 不能把什么数据都往里面加，如果数据里面的 iid 跟后来又要添加的数据 重复了那么就把它的count +1 就好了，如果数据里面的跟后来要添加的没有重复，则把数据加进去
        let oldProduct = null;
        for (let item of context.state.CartList) {
            if (item.iid === payload.iid) {
                oldProduct = item;
            }
        }

        if (oldProduct) {
            // oldProduct.count += 1;
            context.commit("addCounter", oldProduct);
        } else {
            payload.count = 1;
            // state.CartList.push(payload);
            context.commit("addCart", payload);
        }
    }
};
