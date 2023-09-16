
const Product = require('../models/Product');
const Rating = require('../models/Rating');

class RatingController {


    get(req, res, next) {
        try {
            const { productId } = req.params;

            // Tìm tất cả các đánh giá của sản phẩm
            const ratings = Rating.find({ product: productId });

            // Trả về danh sách đánh giá
            res.json(ratings);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve ratings.' });
        }

    }


    post(req, res, next) {
        try {
            const { user, product, value, comment } = req.body;

            // Kiểm tra xem sản phẩm tồn tại
            const existingProduct = Product.findById(product);
            if (!existingProduct) {
                return res.status(404).json({ error: 'Product not found.' });
            }

            // Tạo một đối tượng đánh giá mới
            const newRating = new Rating({
                user,
                product,
                value,
                comment,
            });

            // Lưu đánh giá vào cơ sở dữ liệu
            const savedRating = newRating.save();

            // Trả về đánh giá đã tạo thành công
            res.status(201).json(savedRating);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not create the rating.' });
        }

    }

    put(req, res, next) {
        try {
            const { id } = req.params; // Lấy ID của đánh giá từ URL
            const { value, comment } = req.body;

            // Kiểm tra xem đánh giá tồn tại
            const existingRating = Rating.findById(id);
            if (!existingRating) {
                return res.status(404).json({ error: 'Rating not found.' });
            }

            // Kiểm tra xem người dùng có quyền cập nhật đánh giá không
            if (existingRating.user.toString() !== req.user._id.toString()) {
                return res.status(403).json({ error: 'You do not have permission to update this rating.' });
            }

            // Cập nhật thông tin đánh giá
            existingRating.value = value;
            existingRating.comment = comment;

            // Lưu đánh giá đã cập nhật vào cơ sở dữ liệu
            const updatedRating = existingRating.save();

            // Trả về đánh giá đã cập nhật thành công
            res.json(updatedRating);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not update the rating.' });
        }

    }

    delete(req, res, next) {
        try {
            const { id } = req.params; // Lấy ID của đánh giá từ URL

            // Tìm đánh giá theo ID
            const rating = Rating.findById(id);
            if (!rating) {
                return res.status(404).json({ error: 'Rating not found.' });
            }

            // Kiểm tra xem người dùng có quyền xóa đánh giá không
            if (rating.user.toString() !== req.user._id.toString()) {
                return res.status(403).json({ error: 'You do not have permission to delete this rating.' });
            }

            // Xóa đánh giá
            rating.remove();

            // Trả về thông báo xóa thành công
            res.json({ message: 'Rating deleted successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not delete the rating.' });
        }

    }

}
module.exports = new RatingController;
