-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 10 Juillet 2018 à 18:48
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.1.18-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `comments`
--

INSERT INTO `comments` (`id`, `content`, `user_id`, `post_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'I\'ve tried banks, and I\'ve tried hedges,\' the Pigeon the opportunity of showing off her knowledge.', 1, 1, '2018-07-09 16:20:33', '2018-07-09 16:20:33', NULL),
(2, 'Queen, who was beginning to end,\' said the Duchess. \'Everything\'s got a moral, if only you can.', 3, 2, '2018-07-09 16:20:33', '2018-07-09 16:20:33', NULL),
(3, 'Footman, and began to cry again. \'You ought to have changed since her swim in the other. In the.', 5, 3, '2018-07-09 16:20:33', '2018-07-09 16:20:33', NULL),
(4, 'I was a little quicker. \'What a number of bathing machines in the sea, some children digging in.', 7, 4, '2018-07-09 16:20:34', '2018-07-09 16:20:34', NULL),
(5, 'King\'s argument was, that she did not get dry very soon. \'Ahem!\' said the Hatter, \'when the Queen.', 9, 5, '2018-07-09 16:20:34', '2018-07-09 16:20:34', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `user_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Fury: "I\'ll try the thing Mock Turtle in a.', 'And oh, I wish you wouldn\'t squeeze so.\' said the March Hare said to Alice; and Alice guessed in a low curtain she had not noticed before, and she hurried out of a globe of goldfish she had known them all her knowledge of history, Alice had begun to.', 2, '2018-07-09 16:20:32', '2018-07-09 16:20:32', NULL),
(2, 'White Rabbit with pink eyes ran close by her..', 'First, because I\'m on the look-out for serpents night and day! Why, I do it again and again.\' \'You are old,\' said the Mock Turtle went on growing, and she tried to get us dry would be like, \'--for they haven\'t got much evidence YET,\' she said this, she.', 4, '2018-07-09 16:20:33', '2018-07-09 16:20:33', NULL),
(3, 'I grow at a reasonable pace,\' said the others..', 'After a while, finding that nothing more to be sure; but I don\'t put my arm round your waist,\' the Duchess and the pool rippling to the jury. \'Not yet, not yet!\' the Rabbit came near her, about the temper of your nose-- What made you so awfully clever?\'.', 6, '2018-07-09 16:20:33', '2018-07-09 16:20:33', NULL),
(4, 'When she got into the air. Even the Duchess said.', 'No, there were three little sisters,\' the Dormouse denied nothing, being fast asleep. \'After that,\' continued the Gryphon. \'Do you take me for his housemaid,\' she said aloud. \'I must be really offended. \'We won\'t talk about her any more questions about.', 8, '2018-07-09 16:20:33', '2018-07-09 16:20:33', NULL),
(5, 'It\'s the most curious thing I ask! It\'s always.', 'Queen was to get through was more than Alice could see, when she caught it, and then sat upon it.) \'I\'m glad they don\'t seem to have the experiment tried. \'Very true,\' said the Lory hastily. \'I thought you did,\' said the Cat, \'or you wouldn\'t keep.', 10, '2018-07-09 16:20:33', '2018-07-09 16:20:33', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Dr. Mack Greenholt', 'gwindler@example.net', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'UCe2Pccnlh', '2018-07-09 16:20:32', '2018-07-09 16:20:32'),
(2, 'Sarai Gorczany', 'oscar04@example.net', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'IKlu7tDhuJ', '2018-07-09 16:20:32', '2018-07-09 16:20:32'),
(3, 'Beatrice Bayer', 'gleichner.ressie@example.org', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'ARjObPrIeQ', '2018-07-09 16:20:32', '2018-07-09 16:20:32'),
(4, 'Kylee Dach', 'retha74@example.org', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'ZpPJcp3zDK', '2018-07-09 16:20:33', '2018-07-09 16:20:33'),
(5, 'Henderson Lemke II', 'abernhard@example.net', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', '0Jl5Xioa1j', '2018-07-09 16:20:33', '2018-07-09 16:20:33'),
(6, 'Emilia Kuhlman', 'soledad82@example.net', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'Jysol414Pb', '2018-07-09 16:20:33', '2018-07-09 16:20:33'),
(7, 'Prof. Hadley Davis', 'gmayert@example.com', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'YGaosbzP5h', '2018-07-09 16:20:33', '2018-07-09 16:20:33'),
(8, 'Tyshawn Kozey', 'owen.walker@example.com', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'thSB3tojqb', '2018-07-09 16:20:33', '2018-07-09 16:20:33'),
(9, 'Prof. Norval Rempel', 'kling.sarina@example.org', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'F0riRaPWvm', '2018-07-09 16:20:33', '2018-07-09 16:20:33'),
(10, 'Sienna Swaniawski', 'clement.hayes@example.org', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'OUaY2X6YGR', '2018-07-09 16:20:33', '2018-07-09 16:20:33');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_post_id_foreign` (`post_id`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
